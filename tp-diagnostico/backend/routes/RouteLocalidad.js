const SQL = require('../sql')

const RouteLocalidad = async (req, res) => {
  try {
    const {
      params: { idMunicipio }
    } = { ...req }
    await SQL.initConnection()
    const localidad = await SQL.getLocalidad(idMunicipio)
    await SQL.closeConnection()
    res.status(200).send({ data: localidad })
  } catch (error) {
    console.info('error', error)
    res.status(409).send({ data: 'error', message: error })
  }
}

module.exports = RouteLocalidad
