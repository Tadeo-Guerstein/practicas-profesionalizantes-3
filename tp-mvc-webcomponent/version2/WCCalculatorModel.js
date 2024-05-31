class WCCalculatorModel {
  constructor() {}

  calculate(ecuation) {
    // eslint-disable-next-line no-eval
    return eval(ecuation)
  }
}

export { WCCalculatorModel }
