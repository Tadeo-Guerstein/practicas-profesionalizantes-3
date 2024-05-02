const SQL = require('../sql')

const RouteProvincias = async (req, res) => {
  try {
    await SQL.initConnection()
    const provincias = await SQL.getAllProvincias()
    await SQL.closeConnection()
    res.status(200).send({ data: provincias })
  } catch (error) {
    console.info('error', error)
    res.status(409).send({ data: 'error', message: error })
  }
}

module.exports = RouteProvincias
