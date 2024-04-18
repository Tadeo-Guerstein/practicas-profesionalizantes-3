const mysql = require("mysql2/promise");
const database = require("../connection/connection.json");

module.exports = {
    getAllProvincias: async () => {
        try {
            const connection = await mysql.createConnection(database)
            const [provincias] = await connection.execute("SELECT * FROM provincia", [])
            connection.end()
            return provincias
        } catch (error) {
            console.log("error", error)
            return [{ data: 'error', message: error }]
        }
    },
    getAllLocalidades: async () => {
        try {
            const connection = await mysql.createConnection(database)
            const [localidades] = await connection.execute("SELECT id, nombre FROM localidad", [])
            connection.end()
            return localidades
        } catch (error) {
            console.log("error", error)
            return [{ data: 'error', message: error }]
        }
    },
    getAllDepartamentos: async () => {
        try {
            const connection = await mysql.createConnection(database)
            const [departamentos] = await connection.execute("SELECT * FROM departamento", [])
            connection.end()
            return departamentos
        } catch (error) {
            console.log("error", error)
            return [{ data: 'error', message: error }]
        }
    },
    getAllMunicipios: async () => {
        try {
            const connection = await mysql.createConnection(database)
            const [municipios] = await connection.execute("SELECT * FROM municipio", [])
            connection.end()
            return municipios
        } catch (error) {
            console.log("error", error)
            return [{ data: 'error', message: error }]
        }
    },
    getLocalidad: async (idMunicipio) => {
        try {
            const connection = await mysql.createConnection(database)
            const [localidad] = await connection.execute("SELECT * FROM localidad WHERE id_municipio = (?)", [idMunicipio])
            connection.end()
            return localidad
        } catch (error) {
            console.log("error", error)
            return [{ data: 'error', message: error }]
        }
    },
    getDepartamento: async (idProvincia) => {
        try {
            const connection = await mysql.createConnection(database)
            const [departamento] = await connection.execute("SELECT * FROM departamento WHERE id_provincia = (?)", [idProvincia])
            connection.end()
            return departamento
        } catch (error) {
            console.log("error", error)
            return [{ data: 'error', message: error }]
        }
    },
    getMunicipio: async (idDepartamento) => {
        try {
            const connection = await mysql.createConnection(database)
            const [municipio] = await connection.execute("SELECT * FROM municipio WHERE id_departamento = (?)", [idDepartamento])
            connection.end()
            return municipio
        } catch (error) {
            console.log("error", error)
            return [{ data: 'error', message: error }]
        }
    },
    setProvincias: async (nombre) => {
        try {
            const connection = await mysql.createConnection(database)
            await connection.execute('INSERT INTO provincia (nombre) VALUES (?)', [nombre])
            connection.end()
        } catch (error) {
            console.log("error", error)
            return [{ data: 'error', message: error }]
        }
    },
    setLocalidades: async (nombre, codigoUTA2020, codigoUTA2010, latitud, longitud, municipioID) => {
        try {
            const connection = await mysql.createConnection(database)
            await connection.execute('INSERT INTO localidad (nombre, codigoUTA2020, codigoUTA2010, latitude, longitude, id_municipio) VALUES (?, ?, ?, ?, ?, ?)', [
                nombre,
                codigoUTA2020,
                codigoUTA2010,
                latitud,
                longitud,
                municipioID,
            ])
            connection.end()
        } catch (error) {
            console.log("error", error)
            return [{ data: 'error', message: error }]
        }
    },
    setDepartamentos: async (nombre, idProvincia) => {
        try {
            const connection = await mysql.createConnection(database)
            await connection.execute('INSERT INTO departamento (nombre, id_provincia) VALUES (?, ?)', [nombre, idProvincia])
            connection.end()
        } catch (error) {
            console.log("error", error)
            return [{ data: 'error', message: error }]
        }
    },
    setMunicipios: async (nombre, idDepartamento) => {
        try {
            const connection = await mysql.createConnection(database)
            await connection.execute('INSERT INTO municipio (nombre, id_departamento) VALUES (?, ?)', [nombre, idDepartamento])
            connection.end()
        } catch (error) {
            console.log("error", error)
            return [{ data: 'error', message: error }]
        }
    },
}