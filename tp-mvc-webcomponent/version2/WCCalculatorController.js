class WCCalculatorController {
  constructor(viewComponent, modelComponent) {
    this._viewComponent = viewComponent
    this._modelComponent = modelComponent
  }

  onClickButtonOne() {
    this._viewComponent.updateInput('1')
  }

  onClickButtonTwo() {
    this._viewComponent.updateInput('2')
  }

  onClickButtonThree() {
    this._viewComponent.updateInput('3')
  }

  onClickButtonFour() {
    this._viewComponent.updateInput('4')
  }

  onClickButtonFive() {
    this._viewComponent.updateInput('5')
  }

  onClickButtonSix() {
    this._viewComponent.updateInput('6')
  }

  onClickButtonSeven() {
    this._viewComponent.updateInput('7')
  }

  onClickButtonEight() {
    this._viewComponent.updateInput('8')
  }

  onClickButtonNine() {
    this._viewComponent.updateInput('9')
  }

  onClickButtonZero() {
    this._viewComponent.updateInput('0')
  }

  onClickButtonDecimal() {
    this._viewComponent.updateInput('.')
  }

  onClickButtonPlus() {
    this._viewComponent.updateInput(' + ')
  }

  onClickButtonMinus() {
    this._viewComponent.updateInput(' - ')
  }

  onClickButtonProduct() {
    this._viewComponent.updateInput(' * ')
  }

  onClickButtonDivide() {
    this._viewComponent.updateInput(' / ')
  }

  onClickButtonClear() {
    this._viewComponent.replaceInput('')
  }

  onClickButtonCalculate() {
    const ecuation = this._viewComponent.getInputValue()
    const result = this._modelComponent.calculate(ecuation)
    this._viewComponent.replaceInput(result)
  }
}

export { WCCalculatorController }
