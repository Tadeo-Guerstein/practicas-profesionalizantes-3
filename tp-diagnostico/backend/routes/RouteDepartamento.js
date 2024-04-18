const SQL = require("../sql");

const RouteDepartamento = async (req, res) => {
    try {
        const { params: { idProvincia } } = { ...req }
        const departamento = await SQL.getDepartamento(idProvincia)
        res.status(200).send({ data: departamento })
    } catch (error) {
        console.log('error', error)
        res.status(409).send({ data: 'error', message: error })
    }
}

module.exports = RouteDepartamento
