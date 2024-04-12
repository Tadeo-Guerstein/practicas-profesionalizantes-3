const mysql = require("mysql2/promise");
const database = require("../connection/connection.json");

const RouteLocalidad = async (req, res) => {
    try {
        const { params: { idMunicipio } } = { ...req }
        const connection = await mysql.createConnection(database)
        const [localidadData] = await connection.execute("SELECT * FROM localidad WHERE id_municipio = (?)", [idMunicipio])
        console.log('localidadData', localidadData)
        res.status(200).send({ data: localidadData })
        connection.end()
    } catch (error) {
        console.log('error', error)
        res.status(409).send({ data: 'error', message: error })
    }
}

module.exports = RouteLocalidad
