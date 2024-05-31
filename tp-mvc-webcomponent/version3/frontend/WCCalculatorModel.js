class WCCalculatorModel {
  constructor() {
    this._url = 'http://localhost:8080'
  }

  async calculate(ecuation) {
    const response = await fetch(`${this._url}/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ecuation })
    })

    const { data } = await response.json()

    return data
  }
}

export { WCCalculatorModel }
