const express = require("express")
const cors = require("cors")
const mysql = require("mysql2/promise")
const { cuentas } = require("./cuentas.json")
const database = require("./connection/connection.json");
const app = express()
const PORT = 8080

app.use(express.json())
app.use(cors())

app.get("/", async (req, res) => {
    try {
        const connection = await mysql.createConnection(database)
        const [users] = await connection.execute("SELECT * FROM web_user")
        if (users.length === 0) {
            cuentas.forEach(async (i) => {
                const formatSaldo = parseFloat(i.saldo.split('$')[1])
                await connection.execute("INSERT INTO web_user (id, username, saldo) VALUES (?, ?, ?)", [i.id, i.username, formatSaldo])
            })
        }
        connection.end()
        res.status(200).send({ message: 'ok' })
    } catch (error) {
        res.status(409).send({ error, cuentas: [] })
    }
})

app.get("/users", async (req, res) => {
    try {
        const connection = await mysql.createConnection(database)
        const [data] = await connection.execute("SELECT * FROM web_user")
        connection.end()
        res.status(200).send({ data })
    } catch (error) {
        res.status(409).send({ error, cuentas: [] })
    }
})

app.post("/user", async (req, res) => {
    try {
        const { body } = req
        const { id, username, saldo } = body
        const connection = await mysql.createConnection(database)
        await connection.execute("INSERT INTO web_user (id, username, saldo) VALUES (?, ?, ?)", [id, username, saldo])
        connection.end()
        res.status(200).send({ message: 'ok' })
    } catch (error) {
        res.status(409).send({ error, cuentas: [] })
    }
})

app.delete("/user", async (req, res) => {
    try {
        const { body } = req
        const { id } = body
        const connection = await mysql.createConnection(database)
        await connection.execute("DELETE FROM web_user WHERE id = ?", [id])
        connection.end()
        res.status(200).send({ message: 'ok' })
    } catch (error) {
        res.status(409).send({ error, cuentas: [] })
    }
})

app.put("/user", async (req, res) => {
    try {
        const { body } = req
        const { id, username, saldo } = body
        const connection = await mysql.createConnection(database)
        await connection.execute("UPDATE web_user SET username = ?, saldo = ? WHERE id = ?", [username, saldo, id])
        connection.end()
        res.status(200).send({ message: 'ok' })
    } catch (error) {
        res.status(409).send({ error, cuentas: [] })
    }
})

app.get("/lastID", async (req, res) => {
    try {
        const connection = await mysql.createConnection(database)
        const [lastID] = await connection.execute("SELECT MAX(id) AS last_id FROM web_user", [])
        connection.end()
        res.status(200).send({ data: lastID[0].last_id })
    } catch (error) {
        res.status(409).send({ error, cuentas: [] })
    }
})

app.listen(PORT, () => {
    console.log(`Your app is listening in http://localhost:${PORT}`)
})