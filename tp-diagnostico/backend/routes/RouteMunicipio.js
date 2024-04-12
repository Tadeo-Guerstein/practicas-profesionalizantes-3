const mysql = require("mysql2/promise");
const database = require("../connection/connection.json");

const RouteMunicipio = async (req, res) => {
    try {
        const { params: { idDepartamento } } = { ...req }
        const connection = await mysql.createConnection(database)
        const [municipioData] = await connection.execute("SELECT * FROM municipio WHERE id_departamento = (?)", [idDepartamento])
        console.log('municipioData', municipioData)
        res.status(200).send({ data: municipioData })
        connection.end()
    } catch (error) {
        console.log('error', error)
        res.status(401).send({ data: 'error', message: error })
    }
}

module.exports = RouteMunicipio
