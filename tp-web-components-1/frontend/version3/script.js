const URL = "http://localhost:8080/"

class ABMComponent extends HTMLElement {
    constructor() {
        super()
        this.fillDataSet()
        this._listButton = document.createElement("button")
        this._createButton = document.createElement("button")
        this._updateButton = document.createElement("button")
        this._deleteButton = document.createElement("button")
        this._moreButton = document.createElement("button")
        this._title = document.createElement("h1")
        this._labelAction = document.createElement("label")
        this._labelList = document.createElement("h3")

        this._table = document.createElement("table")
        this._tableHead = this._table.createTHead()
        this._tableBody = this._table.createTBody()
        this._tableHeadRow = this._tableHead.insertRow()
        this._tableHeadRowID = this._tableHeadRow.insertCell()
        this._tableHeadRowUsername = this._tableHeadRow.insertCell()
        this._tableHeadRowSaldo = this._tableHeadRow.insertCell()

        this._title.innerText = "Gestión de cuentas"
        this._labelAction.innerText = "Seleccione una acción: "
        this._labelList.innerText = "Listado de usuarios"
        this._listButton.innerText = "Listar"
        this._createButton.innerText = "Crear"
        this._updateButton.innerText = "Editar"
        this._deleteButton.innerText = "Eliminar"
        this._moreButton.innerText = "..."

        this._tableHeadRowID.innerText = "ID"
        this._tableHeadRowUsername.innerText = "Username"
        this._tableHeadRowSaldo.innerText = "Saldo"
    }

    connectedCallback() {
        this.appendChild(this._title)
        this.appendChild(this._labelAction)
        this.appendChild(this._listButton)
        this.appendChild(this._createButton)
        this.appendChild(this._updateButton)
        this.appendChild(this._deleteButton)
        this.appendChild(this._moreButton)
        this.appendChild(this._labelList)
        this.appendChild(this._table)

        this._createButton.addEventListener("click", this.createButtonEvent)
        this._listButton.addEventListener("click", this.listButtonEvent)
        this._updateButton.addEventListener("click", this.updateButtonEvent)
        this._deleteButton.addEventListener("click", this.deleteButtonEvent)
    }

    createButtonEvent = async () => {
        const name = prompt("Ingrese un nombre")
        const saldo = parseFloat(prompt("Ingrese un saldo"))
        if (name && saldo && this._tableBody.children.length > 0) {
            await this.setUser(name, parseFloat(saldo))
            this.listUsers()
        }
    }

    listButtonEvent = () => {
        this.listUsers()
    }

    updateButtonEvent = async () => {
        const id = parseInt(prompt("Ingrese el id"))
        const nombre = prompt("Ingrese el nuevo nombre")
        const saldo = prompt("Ingrese el nuevo saldo")
        if (id && nombre && saldo) {
            await this.updateUser(id, nombre, parseFloat(saldo))
            this.listUsers()
        }
    }

    deleteButtonEvent = async () => {
        const id = parseInt(prompt("Ingrese el id"))
        if (id) {
            await this.deleteUser(id)
            this.listUsers()
        }
    }

    fillTable(users) {
        this.deleteAllListChildren()
        users.forEach((i) => {
            const rowElement = this._tableBody.insertRow()
            const idElement = rowElement.insertCell()
            const usernameElement = rowElement.insertCell()
            const saldoElement = rowElement.insertCell()

            idElement.innerText = parseInt(i.id)
            usernameElement.innerText = i.username
            saldoElement.innerText = i.saldo
        })
    }

    deleteAllListChildren() {
        if (this._tableBody.children.length === 0) return
        [...this._tableBody.children].forEach((i) => {
            if (i) {

                this._tableBody.removeChild(i)
            }
        })
    }

    async fillDataSet() {
        await fetch(URL)
    }
    
    async listUsers() {
        const users = await this.getUsers()
        this.fillTable(users)
    }

    async getUsers() {
        const response = await fetch(`${URL}users`)
        if (response.status !== 409) {
            const { data } = await response.json()
            data.forEach((i) => {
                i.saldo = `$${i.saldo}`
            })
            return data
        }
    }

    async setUser(username, saldo) {
        await await fetch(`${URL}user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, saldo })
        })
    }

    async deleteUser(id) {
        await fetch(`${URL}user`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        })
    }

    async updateUser(id, username, saldo) {
        await fetch(`${URL}user`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, username, saldo })
        })
    }

    disconnectedCallback() {
    }

    adoptedCallback() {
    }

    attributesChangedCallback(oldValue, newValue) {
    }

    static get observableAttributes() {
    }
}
customElements.define('x-abm-component', ABMComponent);

const abmComponent = new ABMComponent()
document.body.appendChild(abmComponent)