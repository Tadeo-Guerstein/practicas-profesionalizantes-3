const xlsx = require("xlsx");
const mysql = require("mysql2/promise");
const database = require("../connection/connection.json");
const { formatObjectArrayRepeated, formatArrayRepeated } = require("../utils");

const RouteDataset = async (req, res) => {
    try {
        const connection = await mysql.createConnection(database)
        const [provinciaData] = await connection.execute("SELECT id FROM provincia", [])
        const [localidadData] = await connection.execute("SELECT id FROM localidad", [])
        const [departamentoData] = await connection.execute("SELECT id FROM departamento", [])
        const [municipioData] = await connection.execute("SELECT id FROM municipio", [])

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

        if (localidadData.length === 0) {
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

        res.status(200).send({ data: [] })
        connection.end()
    } catch (error) {
        console.log('error', error)
        res.status(409).send({ data: 'error', message: error })
    }
}

module.exports = RouteDataset
