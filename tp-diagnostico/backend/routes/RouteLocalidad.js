const SQL = require("../sql");

const RouteLocalidad = async (req, res) => {
    try {
        const { params: { idMunicipio } } = { ...req }
        const localidad = await SQL.getLocalidad(idMunicipio)
        res.status(200).send({ data: localidad })
    } catch (error) {
        console.log('error', error)
        res.status(409).send({ data: 'error', message: error })
    }
}

module.exports = RouteLocalidad
