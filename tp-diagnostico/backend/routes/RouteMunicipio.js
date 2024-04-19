const SQL = require("../sql")

const RouteMunicipio = async (req, res) => {
    try {
        const { params: { idDepartamento } } = { ...req }
        await SQL.initConnection()
        const municipio = await SQL.getMunicipio(idDepartamento)
        await SQL.closeConnection()
        res.status(200).send({ data: municipio })
    } catch (error) {
        console.log('error', error)
        res.status(409).send({ data: 'error', message: error })
    }
}

module.exports = RouteMunicipio
