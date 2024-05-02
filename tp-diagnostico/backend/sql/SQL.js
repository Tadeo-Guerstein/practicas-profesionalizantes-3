const mysql = require('mysql2/promise')
const database = require('../connection/connection.json')

let connection
let conectionStablished = false

module.exports = {
  initConnection: async () => {
    if (!conectionStablished) {
      connection = await mysql.createConnection(database)
      conectionStablished = true
    }
  },
  closeConnection: async () => {
    if (conectionStablished) {
      await connection.end()
      conectionStablished = false
    }
  },
  getAllProvincias: async () => {
    try {
      const [provincias] = await connection.execute('SELECT * FROM provincia', [])
      return provincias
    } catch (error) {
      console.info('error', error)
      return [{ data: 'error', message: error }]
    }
  },
  getAllLocalidades: async () => {
    try {
      const [localidades] = await connection.execute('SELECT * FROM localidad', [])
      return localidades
    } catch (error) {
      console.info('error', error)
      return [{ data: 'error', message: error }]
    }
  },
  getAllDepartamentos: async () => {
    try {
      const [departamentos] = await connection.execute('SELECT * FROM departamento', [])
      return departamentos
    } catch (error) {
      console.info('error', error)
      return [{ data: 'error', message: error }]
    }
  },
  getAllMunicipios: async () => {
    try {
      const [municipios] = await connection.execute('SELECT * FROM municipio', [])
      return municipios
    } catch (error) {
      console.info('error', error)
      return [{ data: 'error', message: error }]
    }
  },
  getLocalidad: async (idMunicipio) => {
    try {
      const [localidad] = await connection.execute('SELECT * FROM localidad WHERE id_municipio = (?)', [idMunicipio])
      return localidad
    } catch (error) {
      console.info('error', error)
      return [{ data: 'error', message: error }]
    }
  },
  getDepartamento: async (idProvincia) => {
    try {
      const [departamento] = await connection.execute('SELECT * FROM departamento WHERE id_provincia = (?)', [
        idProvincia
      ])
      return departamento
    } catch (error) {
      console.info('error', error)
      return [{ data: 'error', message: error }]
    }
  },
  getMunicipio: async (idDepartamento) => {
    try {
      const [municipio] = await connection.execute('SELECT * FROM municipio WHERE id_departamento = (?)', [
        idDepartamento
      ])
      return municipio
    } catch (error) {
      console.info('error', error)
      return [{ data: 'error', message: error }]
    }
  },
  setProvincias: async (nombre) => {
    try {
      await connection.execute('INSERT INTO provincia (nombre) VALUES (?)', [nombre])
    } catch (error) {
      console.info('error', error)
      return [{ data: 'error', message: error }]
    }
  },
  setLocalidades: async (nombre, codigoUTA2020, codigoUTA2010, latitud, longitud, municipioID) => {
    try {
      await connection.execute(
        'INSERT INTO localidad (nombre, codigoUTA2020, codigoUTA2010, latitude, longitude, id_municipio) VALUES (?, ?, ?, ?, ?, ?)',
        [nombre, codigoUTA2020, codigoUTA2010, latitud, longitud, municipioID]
      )
    } catch (error) {
      console.info('error', error)
      return [{ data: 'error', message: error }]
    }
  },
  setDepartamentos: async (nombre, idProvincia) => {
    try {
      await connection.execute('INSERT INTO departamento (nombre, id_provincia) VALUES (?, ?)', [nombre, idProvincia])
    } catch (error) {
      console.info('error', error)
      return [{ data: 'error', message: error }]
    }
  },
  setMunicipios: async (nombre, idDepartamento) => {
    try {
      await connection.execute('INSERT INTO municipio (nombre, id_departamento) VALUES (?, ?)', [
        nombre,
        idDepartamento
      ])
    } catch (error) {
      console.info('error', error)
      return [{ data: 'error', message: error }]
    }
  }
}
