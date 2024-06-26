const cuentas = [
  {
    'id': 1,
    'username': 'IronMan92',
    'saldo': '$100.50'
  },
  {
    'id': 2,
    'username': 'LunaGamer77',
    'saldo': '$75.25'
  },
  {
    'id': 3,
    'username': 'ShadowNinja123',
    'saldo': '$200.00'
  },
  {
    'id': 4,
    'username': 'DragonMasterX',
    'saldo': '$50.75'
  },
  {
    'id': 5,
    'username': 'SpaceExplorer99',
    'saldo': '$300.30'
  },
  {
    'id': 6,
    'username': 'PixelWizard',
    'saldo': '$150.00'
  },
  {
    'id': 7,
    'username': 'MysterySeeker',
    'saldo': '$80.60'
  },
  {
    'id': 8,
    'username': 'EternalDreamer',
    'saldo': '$400.20'
  },
  {
    'id': 9,
    'username': 'SunnySideUp',
    'saldo': '$10.00'
  },
  {
    'id': 10,
    'username': 'NeonPhantom',
    'saldo': '$50.00'
  },
  {
    'id': 11,
    'username': 'CyberPunk99',
    'saldo': '$125.75'
  },
  {
    'id': 12,
    'username': 'GalacticTraveler',
    'saldo': '$275.50'
  },
  {
    'id': 13,
    'username': 'TechWizard',
    'saldo': '$90.25'
  },
  {
    'id': 14,
    'username': 'MysticMage',
    'saldo': '$180.00'
  },
  {
    'id': 15,
    'username': 'SamuraiWarrior',
    'saldo': '$200.60'
  },
  {
    'id': 16,
    'username': 'StealthyAssassin',
    'saldo': '$450.20'
  },
  {
    'id': 17,
    'username': 'CosmicExplorer',
    'saldo': '$15.00'
  },
  {
    'id': 18,
    'username': 'DreamCatcher',
    'saldo': '$75.00'
  },
  {
    'id': 19,
    'username': 'ArcaneSorcerer',
    'saldo': '$300.00'
  },
  {
    'id': 20,
    'username': 'StarStrider',
    'saldo': '$500.00'
  },
  {
    'id': 21,
    'username': 'NeoGamer',
    'saldo': '$110.00'
  },
  {
    'id': 22,
    'username': 'TechNinja',
    'saldo': '$95.50'
  },
  {
    'id': 23,
    'username': 'GalacticHero',
    'saldo': '$700.75'
  },
  {
    'id': 24,
    'username': 'DreamWalker',
    'saldo': '$250.25'
  },
  {
    'id': 25,
    'username': 'CyberMage',
    'saldo': '$180.80'
  },
  {
    'id': 26,
    'username': 'SpacePilot',
    'saldo': '$600.00'
  },
  {
    'id': 27,
    'username': 'TechSavvy',
    'saldo': '$50.50'
  },
  {
    'id': 28,
    'username': 'VirtualWarrior',
    'saldo': '$175.00'
  },
  {
    'id': 29,
    'username': 'DigitalNomad',
    'saldo': '$125.20'
  },
  {
    'id': 30,
    'username': 'PixelPioneer',
    'saldo': '$300.40'
  }
]

class ABMComponent extends HTMLElement {
  constructor() {
    super()

    this._listButton = document.createElement('button')
    this._createButton = document.createElement('button')
    this._updateButton = document.createElement('button')
    this._deleteButton = document.createElement('button')
    this._moreButton = document.createElement('button')
    this._title = document.createElement('h1')
    this._labelAction = document.createElement('label')
    this._labelList = document.createElement('h3')

    this._table = document.createElement('table')
    this._tableHead = this._table.createTHead()
    this._tableBody = this._table.createTBody()
    this._tableHeadRow = this._tableHead.insertRow()
    this._tableHeadRowID = this._tableHeadRow.insertCell()
    this._tableHeadRowUsername = this._tableHeadRow.insertCell()
    this._tableHeadRowSaldo = this._tableHeadRow.insertCell()

    this._title.innerText = 'Gestión de cuentas'
    this._labelAction.innerText = 'Seleccione una acción: '
    this._labelList.innerText = 'Listado de usuarios'
    this._listButton.innerText = 'Listar'
    this._createButton.innerText = 'Crear'
    this._updateButton.innerText = 'Editar'
    this._deleteButton.innerText = 'Eliminar'
    this._moreButton.innerText = '...'

    this._tableHeadRowID.innerText = 'ID'
    this._tableHeadRowUsername.innerText = 'Username'
    this._tableHeadRowSaldo.innerText = 'Saldo'
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

    this._createButton.onclick = this.createButtonEvent
    this._listButton.onclick = this.listButtonEvent
    this._updateButton.onclick = this.updateButtonEvent
    this._deleteButton.onclick = this.deleteButtonEvent
  }

  createButtonEvent = () => {
    const name = prompt('Ingrese un nombre')
    const saldo = parseFloat(prompt('Ingrese un saldo'))

    console.info('new user', { name, saldo })
  }

  listButtonEvent = () => {
    this.fillTable(cuentas)
  }

  updateButtonEvent = () => {
    const id = parseInt(prompt('Ingrese el id'))
    const nombre = prompt('Ingrese el nuevo nombre')
    const saldo = prompt('Ingrese el nuevo saldo')
    const usersChildren = this.getChildObject()
    const oldUser = usersChildren.find((i) => {
      return i.id === id
    })
    const newUser = { ...oldUser, saldo: saldo, username: nombre }

    console.info('newUser', newUser)
    console.info('oldUser', oldUser)
  }

  deleteButtonEvent = () => {
    const id = parseInt(prompt('Ingrese el id'))
    const usersChildren = this.getChildObject()
    const user = usersChildren.find((i) => {
      return i.id === id
    })
    console.info('user', user)
  }

  fillTable(array) {
    this.deleteAllListChildren()
    array.forEach((i) => {
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
    const arrayChildrens = [...this._tableBody.children]
    arrayChildrens.forEach((i) => {
      if (i) {
        this._tableBody.removeChild(i)
      }
    })
  }

  getChildObject() {
    const tbodyChildren = [...this._tableBody.children].map((i) => {
      const childs = [...i.children]
      const id = parseInt(childs[0].innerText)
      const username = childs[1].innerText
      const saldo = childs[2].innerText
      return { id, username, saldo }
    })
    return tbodyChildren
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributesChangedCallback(oldValue, newValue) {}

  static get observableAttributes() {}
}
customElements.define('x-abm-component', ABMComponent)

const abmComponent = new ABMComponent()
document.body.appendChild(abmComponent)
