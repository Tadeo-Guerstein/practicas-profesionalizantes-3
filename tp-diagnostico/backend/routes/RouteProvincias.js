const mysql = require("mysql2/promise");
const database = require("../connection/connection.json");

const RouteProvincias = async (req, res) => {
    try {
        const connection = await mysql.createConnection(database)
        const [provinciaData] = await connection.execute("SELECT * FROM provincia", [])
        res.status(200).send({ data: provinciaData })
        connection.end()
    } catch (error) {
        console.log('error', error)
        res.status(409).send({ data: 'error', message: error })
    }
}

module.exports = RouteProvincias
