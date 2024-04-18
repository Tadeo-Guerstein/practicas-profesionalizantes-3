const SQL = require("../sql");

const RouteProvincias = async (req, res) => {
    try {
        const provincias = await SQL.getAllProvincias()
        res.status(200).send({ data: provincias })
    } catch (error) {
        console.log('error', error)
        res.status(409).send({ data: 'error', message: error })
    }
}

module.exports = RouteProvincias
