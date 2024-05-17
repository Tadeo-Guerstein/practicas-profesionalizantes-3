const datosMetereologicos = [
  [
    { value: 42.4, month: 'Enero' },
    { value: 38.1, month: 'Febrero' },
    { value: 36.3, month: 'Marzo' },
    { value: 32.5, month: 'Abril' },
    { value: 27.4, month: 'Mayo' },
    { value: 22.2, month: 'Junio' },
    { value: 27.7, month: 'Julio' },
    { value: 24.7, month: 'Agosto' },
    { value: 28.8, month: 'Septiembre' },
    { value: 34.4, month: 'Octubre' },
    { value: 35.7, month: 'Noviembre' },
    { value: 39.4, month: 'Diciembre' },
    { value: 39.4, month: 'Anual' }
  ],
  [
    { value: 26.3, month: 'Enero' },
    { value: 25.8, month: 'Febrero' },
    { value: 23.7, month: 'Marzo' },
    { value: 20.5, month: 'Abril' },
    { value: 16.8, month: 'Mayo' },
    { value: 13.8, month: 'Junio' },
    { value: 13.1, month: 'Julio' },
    { value: 14.1, month: 'Agosto' },
    { value: 16.0, month: 'Septiembre' },
    { value: 18.5, month: 'Octubre' },
    { value: 21.7, month: 'Noviembre' },
    { value: 24.4, month: 'Diciembre' },
    { value: 19.6, month: 'Anual' }
  ],
  [
    { value: 20.3, month: 'Enero' },
    { value: 19.9, month: 'Febrero' },
    { value: 18.0, month: 'Marzo' },
    { value: 14.6, month: 'Abril' },
    { value: 11.3, month: 'Mayo' },
    { value: 8.5, month: 'Junio' },
    { value: 8.1, month: 'Julio' },
    { value: 8.9, month: 'aAosto' },
    { value: 10.5, month: 'Septiembre' },
    { value: 13.1, month: 'Octubre' },
    { value: 15.9, month: 'Noviembre' },
    { value: 18.5, month: 'Diciembre' },
    { value: 14.0, month: 'Anual' }
  ],
  [
    { value: 14.3, month: 'Enero' },
    { value: 14.1, month: 'Febrero' },
    { value: 12.5, month: 'Marzo' },
    { value: 9.1, month: 'Abril' },
    { value: 6.4, month: 'Mayo' },
    { value: 4.1, month: 'Junio' },
    { value: 3.8, month: 'Julio' },
    { value: 4.0, month: 'aAosto' },
    { value: 5.3, month: 'sSptiembre' },
    { value: 7.6, month: 'oOtubre' },
    { value: 10.1, month: 'Noviembre' },
    { value: 12.7, month: 'Diciembre' },
    { value: 8.7, month: 'Anual' }
  ],
  [
    { value: 4.7, month: 'Enero' },
    { value: 1.2, month: 'Febrero' },
    { value: 1.9, month: 'Marzo' },
    { value: -1.0, month: 'Abril' },
    { value: -3.0, month: 'Mayo' },
    { value: -5.5, month: 'Junio' },
    { value: -9.3, month: 'Julio' },
    { value: -6.4, month: 'Agosto' },
    { value: -5.5, month: 'Septiembre' },
    { value: -3.0, month: 'Octubre' },
    { value: -2.0, month: 'Noviembre' },
    { value: -0.2, month: 'Diciembre' },
    { value: -9.3, month: 'Anual' }
  ],
  [
    { value: 100.1, month: 'Enero' },
    { value: 72.8, month: 'Febrero' },
    { value: 107.0, month: 'Marzo' },
    { value: 73.3, month: 'Abril' },
    { value: 73.5, month: 'Mayo' },
    { value: 54.9, month: 'Junio' },
    { value: 58.9, month: 'Julio' },
    { value: 64.0, month: 'aAosto' },
    { value: 56.4, month: 'sSptiembre' },
    { value: 83.4, month: 'oOtubre' },
    { value: 75.3, month: 'nNviembre' },
    { value: 104.0, month: 'Diciembre' },
    { value: 923.0, month: 'Anual' }
  ],
  [
    { value: 9, month: 'Enero' },
    { value: 8, month: 'Febrero' },
    { value: 9, month: 'Marzo' },
    { value: 9, month: 'Abril' },
    { value: 9, month: 'Mayo' },
    { value: 9, month: 'Junio' },
    { value: 9, month: 'Julio' },
    { value: 8, month: 'aAosto' },
    { value: 7, month: 'sSptiembre' },
    { value: 10, month: 'Octubre' },
    { value: 10, month: 'Noviembre' },
    { value: 10, month: 'Diciembre' },
    { value: 107, month: 'Anual' }
  ],
  [
    { value: 288.3, month: 'Enero' },
    { value: 234.5, month: 'Febrero' },
    { value: 232.5, month: 'Marzo' },
    { value: 195.0, month: 'Abril' },
    { value: 167.4, month: 'Mayo' },
    { value: 120.0, month: 'Junio' },
    { value: 127.1, month: 'Julio' },
    { value: 164.3, month: 'Agosto' },
    { value: 174.0, month: 'Septiembre' },
    { value: 210.8, month: 'Octubre' },
    { value: 222.0, month: 'Noviembre' },
    { value: 269.7, month: 'Diciembre' },
    { value: 2405.6, month: 'Anual' }
  ],
  [
    { value: 76, month: 'Enero' },
    { value: 77, month: 'Febrero' },
    { value: 79, month: 'Marzo' },
    { value: 81, month: 'Abril' },
    { value: 83, month: 'Mayo' },
    { value: 84, month: 'Junio' },
    { value: 81, month: 'Julio' },
    { value: 81, month: 'Agosto' },
    { value: 80, month: 'Septiembre' },
    { value: 80, month: 'Octubre' },
    { value: 77, month: 'Noviembre' },
    { value: 76, month: 'Diciembre' },
    { value: 80, month: 'Anual' }
  ]
]

class MeteorologicoComponent extends HTMLElement {
  constructor() {
    super()

    this._buttonList = document.createElement('button')
    this._buttonList.innerText = 'Listar'
    this._table = document.createElement('table')
    this._tableHead = this._table.createTHead()
    this._tableBody = this._table.createTBody()

    this._tableHeadRow = this._tableHead.insertRow()
    this._tableHeadRowMonth = this._tableHeadRow.insertCell()
    this._tableHeadRowEnero = this._tableHeadRow.insertCell()
    this._tableHeadRowFebrero = this._tableHeadRow.insertCell()
    this._tableHeadRowMarzo = this._tableHeadRow.insertCell()
    this._tableHeadRowAbril = this._tableHeadRow.insertCell()
    this._tableHeadRowMayo = this._tableHeadRow.insertCell()
    this._tableHeadRowJunio = this._tableHeadRow.insertCell()
    this._tableHeadRowJulio = this._tableHeadRow.insertCell()
    this._tableHeadRowAgosto = this._tableHeadRow.insertCell()
    this._tableHeadRowSeptiembre = this._tableHeadRow.insertCell()
    this._tableHeadRowOctubre = this._tableHeadRow.insertCell()
    this._tableHeadRowNoviembre = this._tableHeadRow.insertCell()
    this._tableHeadRowDiciembre = this._tableHeadRow.insertCell()
    this._tableHeadRowAnual = this._tableHeadRow.insertCell()

    this._tableHeadRowMonth.innerText = 'Mes'
    this._tableHeadRowEnero.innerText = 'Enero'
    this._tableHeadRowFebrero.innerText = 'Febrero'
    this._tableHeadRowMarzo.innerText = 'Marzo'
    this._tableHeadRowAbril.innerText = 'Abril'
    this._tableHeadRowMayo.innerText = 'Mayo'
    this._tableHeadRowJunio.innerText = 'Junio'
    this._tableHeadRowJulio.innerText = 'Julio'
    this._tableHeadRowAgosto.innerText = 'Agosto'
    this._tableHeadRowSeptiembre.innerText = 'Septiembre'
    this._tableHeadRowOctubre.innerText = 'Octubre'
    this._tableHeadRowNoviembre.innerText = 'Noviembre'
    this._tableHeadRowDiciembre.innerText = 'Diciembre'
    this._tableHeadRowAnual.innerText = 'Anual'

    this._tableTMaxRow = this._tableBody.insertRow()
    this._tableTMaxCell = this._tableTMaxRow.insertCell()
    this._tableTMaxCell.innerText = 'Temp. máx abs. (°C)'
    this._tableTMaxMediaRow = this._tableBody.insertRow()
    this._tableTMaxMediaCell = this._tableTMaxMediaRow.insertCell()
    this._tableTMaxMediaCell.innerText = 'Temp. máx. media (°C)'
    this._tableTMediaRow = this._tableBody.insertRow()
    this._tableTMediaCell = this._tableTMediaRow.insertCell()
    this._tableTMediaCell.innerText = 'Temp. media (°C)'
    this._tableTMinMediaRow = this._tableBody.insertRow()
    this._tableTMinMediaCell = this._tableTMinMediaRow.insertCell()
    this._tableTMinMediaCell.innerText = 'Temp. mín media (°C)'
    this._tableTMinRow = this._tableBody.insertRow()
    this._tableTMinCell = this._tableTMinRow.insertCell()
    this._tableTMinCell.innerText = 'Temp. min abs. (°C)'
    this._tablePrecipitacionRow = this._tableBody.insertRow()
    this._tablePrecipitacionCell = this._tablePrecipitacionRow.insertCell()
    this._tablePrecipitacionCell.innerText = 'Precipitación total (mm)'
    this._tableDiasPrecipiRow = this._tableBody.insertRow()
    this._tableDiasPrecipiCell = this._tableDiasPrecipiRow.insertCell()
    this._tableDiasPrecipiCell.innerText = 'Días de precipitaciones (>= 0.1 mm)'
    this._tableSolRow = this._tableBody.insertRow()
    this._tableSolCell = this._tableSolRow.insertCell()
    this._tableSolCell.innerText = 'Horas de sol'
    this._tableHumedadRow = this._tableBody.insertRow()
    this._tableHumedadCell = this._tableHumedadRow.insertCell()
    this._tableHumedadCell.innerText = 'Humedad relativa (%)'
  }

  connectedCallback() {
    this.appendChild(this._buttonList)
    this.appendChild(this._table)

    this._buttonList.onclick = this.listData.bind(this)
  }

  listData() {
    if (this._tableBody.children[0].children.length > 1) return
    datosMetereologicos.forEach((item, index) => {
      const bodyRow = this._tableBody.children[index]

      item.forEach((object) => {
        const tdElement = document.createElement('td')
        tdElement.innerText = object.value
        tdElement.style.backgroundColor = this.getColorTemp(object.value)
        tdElement.style.color = '#000000'
        if (index === 5) {
          tdElement.style.backgroundColor = this.getColorPresi(object.value)
          tdElement.style.color = '#ffffff'
        }
        if (index === 6) {
          tdElement.style.backgroundColor = this.getColorDiasPresi(object.value)
          tdElement.style.color = '#ffffff'
        }
        if (index === 7) {
          tdElement.style.backgroundColor = this.getColorSol(object.value)
        }
        if (index === 8) {
          tdElement.style.backgroundColor = '#0000dc'
          tdElement.style.color = '#ffffff'
        }

        bodyRow.appendChild(tdElement)
      })
    })
  }

  getColorTemp(value) {
    if (value >= 42.4) {
      return '#b60000'
    } else if (value < 42.4 && value >= 39.4) {
      return '#db0000'
    } else if (value < 39.4 && value >= 36.3) {
      return '#ff0000'
    } else if (value < 36.3 && value >= 34.4) {
      return '#ff1400'
    } else if (value < 34.4 && value >= 27.7) {
      return '#ff3c00'
    } else if (value < 27.7 && value >= 24.7) {
      return '#ff5000'
    } else if (value < 24.7 && value >= 22.2) {
      return '#ff6400'
    } else if (value < 22.2 && value >= 18.0) {
      return '#ff8c00'
    } else if (value < 18.0 && value >= 15.9) {
      return '#ff9900'
    } else if (value < 15.9 && value >= 12.5) {
      return '#ffa500'
    } else if (value < 12.5 && value >= 9.1) {
      return '#ffcc66'
    } else if (value < 9.1 && value >= 6.4) {
      return '#ffff99'
    } else if (value < 6.4 && value >= 3.8) {
      return '#ffffcc'
    } else if (value < 3.8 && value >= 0) {
      return '#ffffff'
    } else if (value < 0 && value >= -3.0) {
      return '#f0ffff'
    } else if (value < -3.0 && value >= -5.5) {
      return '#dcf0ff'
    } else if (value < -5.5 && value >= -6.4) {
      return '#b4c8ff'
    } else {
      return '#c8dcff'
    }
  }

  getColorSol(value) {
    if (value <= 120.0) {
      return '#b3a973'
    } else if (value > 120.0 && value <= 127.1) {
      return '#beb271'
    } else if (value > 127.1 && value <= 167.4) {
      return '#d3c368'
    } else if (value > 167.4 && value <= 174.0) {
      return '#dccb61'
    } else if (value > 174.0 && value <= 210.8) {
      return '#eeda4a'
    } else if (value > 210.8 && value <= 222.0) {
      return '#f7e135'
    } else if (value > 222.0 && value <= 300) {
      return '#ffe700'
    } else {
      return '#d3c368'
    }
  }

  getColorPresi(value) {
    if (value <= 54.9) {
      return '#b0b0ff'
    } else if (value > 54.9 && value <= 64.0) {
      return '#a2a2ff'
    } else if (value > 64.0 && value <= 73.5) {
      return '#9494ff'
    } else if (value > 73.5 && value <= 83.4) {
      return '#8282ff'
    } else if (value > 83.4 && value <= 104) {
      return '#6666ff'
    } else if (value > 104 && value <= 107.0) {
      return '#5454ff'
    } else {
      return '#8282ff'
    }
  }

  getColorDiasPresi(value) {
    if (value <= 9 || value > 10) {
      return '#a0c8f0'
    }
    return '#508cff'
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributesChangedCallback(oldValue, newValue) {}

  static get observableAttributes() {}
}

customElements.define('x-meteorologico-component', MeteorologicoComponent)

const meteorologico = new MeteorologicoComponent()
document.body.appendChild(meteorologico)
