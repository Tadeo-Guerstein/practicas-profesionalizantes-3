const xlsx = require("xlsx");
const { formatObjectArrayRepeated, formatArrayRepeated } = require("../utils");
const SQL = require("../sql");

const RouteDataset = async (req, res) => {
    try {
        await SQL.initConnection().then()
        const provinciaData = await SQL.getAllProvincias()
        const localidadData = await SQL.getAllLocalidades()
        const departamentoData = await SQL.getAllDepartamentos()
        const municipioData = await SQL.getAllMunicipios()

        const localidades = xlsx.readFile("./Localidades.xlsx")
        const firstSheetName = localidades.SheetNames[0];
        const worksheet = localidades.Sheets[firstSheetName];
        const excelData = xlsx.utils.sheet_to_json(worksheet);

        if (provinciaData.length === 0) {
            const provinciaName = excelData.map((i) => {
                return i.Provincia
            })
            const provinciaNameFormatted = formatArrayRepeated(provinciaName)
            provinciaNameFormatted.forEach(async (name) => {
                await SQL.setProvincias(name)
            });
        }

        if (departamentoData.length === 0) {
            const provincias = await SQL.getAllProvincias()
            const departamentos = []
            excelData.forEach((data) => {
                const provincia = provincias.find((provinciaData) => {
                    return provinciaData.nombre === data.Provincia
                })
                if (provincia) {
                    departamentos.push({ nombre: data.Departamento, provinciaID: provincia.id })
                }
            })
            const departamentosFormatted = formatObjectArrayRepeated(departamentos)
            departamentosFormatted.forEach(async (i) => {
                await SQL.setDepartamentos(i.nombre, i.provinciaID)
            })
        }

        if (municipioData.length === 0) {
            const departamentos = await SQL.getAllDepartamentos()
            const municipios = []
            excelData.forEach((data) => {
                const departamento = departamentos.find((i) => {
                    return i.nombre === data.Departamento
                })
                if (departamento) {
                    municipios.push({ nombre: data.Municipio, departamentoID: departamento.id })
                }
            })
            const municipiosFormatted = formatObjectArrayRepeated(municipios)
            municipiosFormatted.forEach(async (i) => {
                await SQL.setMunicipios(i.nombre, i.departamentoID)
            })
        }

        if (localidadData.length === 0) {
            const municipios = await SQL.getAllMunicipios()
            const localidadesArr = []
            excelData.forEach((data) => {
                const municipio = municipios.find((i) => {
                    return i.nombre === data.Municipio
                })
                if (municipio) {
                    localidadesArr.push({
                        nombre: data.Nombre,
                        municipioID: municipio.id,
                        codigoUTA2020: data['Código UTA 2020'],
                        codigoUTA2010: data['Código UTA 2010'],
                        latitud: data.Latitud,
                        longitud: data.Longitud,
                    })
                }
            })
            const localidadFormatted = formatObjectArrayRepeated(localidadesArr)
            localidadFormatted.forEach(async (i) => {
                await SQL.setLocalidades(i.nombre, i.codigoUTA2020, i.codigoUTA2010, i.latitud, i.longitud, i.municipioID)
            })
        }

        await SQL.closeConnection()
        res.status(200).send({ data: [] })
    } catch (error) {
        console.log('error', error)
        res.status(409).send({ data: 'error', message: error })
    }
}

module.exports = RouteDataset
