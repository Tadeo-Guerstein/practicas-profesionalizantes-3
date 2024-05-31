/* eslint-disable no-eval */
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080

app.use(express.json())
app.use(cors())

app.post('/calculate', (req, res) => {
  try {
    const { body } = req
    const { ecuation } = body
    const result = eval(ecuation)
    res.status(200).send({ data: result })
  } catch (error) {
    res.status(409).send({ error })
  }
})

app.listen(PORT, () => {
  console.info(`Your app is listening in http://localhost:${PORT}`)
})
