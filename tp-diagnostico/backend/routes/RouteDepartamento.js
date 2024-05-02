const SQL = require('../sql')

const RouteDepartamento = async (req, res) => {
  try {
    await SQL.initConnection()
    const {
      params: { idProvincia }
    } = { ...req }
    const departamento = await SQL.getDepartamento(idProvincia)
    await SQL.closeConnection()
    res.status(200).send({ data: departamento })
  } catch (error) {
    console.info('error', error)
    res.status(409).send({ data: 'error', message: error })
  }
}

module.exports = RouteDepartamento
