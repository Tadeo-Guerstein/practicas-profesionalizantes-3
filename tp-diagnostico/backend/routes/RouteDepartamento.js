const mysql = require("mysql2/promise");
const database = require("../connection/connection.json");

const RouteDepartamento = async (req, res) => {
    try {
        const { params: { idProvincia } } = { ...req }
        const connection = await mysql.createConnection(database)
        const [departamentoData] = await connection.execute("SELECT * FROM departamento WHERE id_provincia = (?)", [idProvincia])
        res.status(200).send({ data: departamentoData })
        connection.end()
    } catch (error) {
        console.log('error', error)
        res.status(409).send({ data: 'error', message: error })
    }
}

module.exports = RouteDepartamento
