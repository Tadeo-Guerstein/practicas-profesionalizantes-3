const express = require("express")
const app = express()
const PORT = 8080

const xlsx = require("xlsx");
const mysql = require("mysql2/promise");
const database = require("./connection/connection.json")

app.use(express.json())

const formatArrayRepeated = (array) => {
    return array.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })
}

const formatObjectArrayRepeated = (array) => {
    return array.reduce((accumulator, currentValue) => {
        let existingItem = accumulator.find(item => item.nombre === currentValue.nombre);
        if (!existingItem) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
}

app.use('/', async (req, res) => {
    try {
        const connection = await mysql.createConnection(database)
        const [provinciaData] = await connection.execute("SELECT id FROM provincia", [])
        const [localidadData] = await connection.execute("SELECT id FROM localidad", [])
        const [departamentoData] = await connection.execute("SELECT id FROM departamento", [])
        const [municipioData] = await connection.execute("SELECT id FROM municipio", [])

        console.log('provinciaData', provinciaData)
        console.log('localidadData', localidadData)
        console.log('departamentoData', departamentoData)
        console.log('municipioData', municipioData)

        // if (provinciaData.length > 0 && localidadData.length > 0 && departamentoData.length > 0 && municipioData.length > 0) {
        //     await connection.end()
        //     res.status(200).send({ data })
        //     return
        // }

        const localidades = xlsx.readFile("./Localidades.xlsx")
        const firstSheetName = localidades.SheetNames[0];
        const worksheet = localidades.Sheets[firstSheetName];
        const formattedExcel = xlsx.utils.sheet_to_json(worksheet);

        if (provinciaData.length === 0) {
            const provinciaName = formattedExcel.map((i) => {
                return i.Provincia
            })
            const provinciaNameFormatted = formatArrayRepeated(provinciaName)
            // SENTENCIA SQL POST PROVINCIA NAME
            provinciaNameFormatted.forEach(async (name) => {
                await connection.execute('INSERT INTO provincia (nombre) VALUES (?)', [name])
            });
        }

        if (departamentoData.length === 0) {
            await Promise.all(formattedExcel.map(async (i) => {
                // SENTENCIA SQL SELECT PROVINCIA ID
                const [provinciaID] = await connection.execute('SELECT id FROM provincia WHERE nombre = ?', [i.Provincia])
                return { nombre: i.Departamento, provinciaID: provinciaID[0].id }
            })).then(resultado => {
                // SENTENCIA SQL POST DEPARTAMENTO
                const resultadoFormatted = formatObjectArrayRepeated(resultado)
                resultadoFormatted.forEach((i) => {
                    connection.execute('INSERT INTO departamento (nombre, id_provincia) VALUES (?, ?)', [i.nombre, i.provinciaID])
                })
            })
        }

        if (municipioData.length === 0) {
            await Promise.all(formattedExcel.map(async (i) => {
                // SENTENCIA SQL SELECT DEPARTAMENTO ID
                const [departamentoID] = await connection.execute('SELECT id FROM departamento WHERE nombre = ?', [i.Departamento])
                return { nombre: i.Municipio, departamentoID: departamentoID[0].id }
            })).then(resultado => {
                // SENTENCIA SQL POST MUNICIPIO
                const resultadoFormatted = formatObjectArrayRepeated(resultado)
                resultadoFormatted.forEach((i) => {
                    connection.execute('INSERT INTO municipio (nombre, id_departamento) VALUES (?, ?)', [i.nombre, i.departamentoID])
                })
            })
        }

        if(localidadData.length === 0){
            await Promise.all(formattedExcel.map(async (i) => {
                // SENTENCIA SQL SELECT MUNICIPIO ID
                const [municipioID] = await connection.execute('SELECT id FROM municipio WHERE nombre = ?', [i.Municipio])
                return {
                    nombre: i.Nombre,
                    municipioID: municipioID[0].id,
                    codigoUTA2020: i['Código UTA 2020'],
                    codigoUTA2010: i['Código UTA 2010'],
                    latitud: i.Latitud,
                    longitud: i.Longitud,
                }
            })).then(resultado => {
                // SENTENCIA SQL INSERT LOCALIDAD
                const resultadoFormatted = formatObjectArrayRepeated(resultado)
                resultadoFormatted.forEach((i) => {
                    connection.execute('INSERT INTO localidad (nombre, codigoUTA2020, codigoUTA2010, latitude, longitude, id_municipio) VALUES (?, ?, ?, ?, ?, ?)', [
                        i.nombre,
                        i.codigoUTA2020,
                        i.codigoUTA2010,
                        i.latitud,
                        i.longitud,
                        i.municipioID,
                    ])
                })
            })
        }
        // SENTENCIA SQL POST LOCALIDAD

        res.status(200).send({ data: [] })
        connection.end()
    } catch (error) {
        console.log('error', error)
        res.status(401).send({ data: 'error', message: error })
    }
})

app.listen(PORT, () => {
    console.log(`Your app is listening in http://localhost:${PORT}`)
})
