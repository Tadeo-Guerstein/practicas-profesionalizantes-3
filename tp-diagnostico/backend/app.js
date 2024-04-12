const express = require("express")
const app = express()
const PORT = 8080
const { RouteDataset, RouteProvincias, RouteDepartamento, RouteMunicipio, RouteLocalidad } = require("./routes")

app.use(express.json())

app.get('/', RouteDataset)
app.get('/provincias', RouteProvincias)
app.get('/departamentos/:idProvincia', RouteDepartamento)
app.get('/municipios/:idDepartamento', RouteMunicipio)
app.get('/localidades/:idMunicipio', RouteLocalidad)

app.listen(PORT, () => {
    console.log(`Your app is listening in http://localhost:${PORT}`)
})
