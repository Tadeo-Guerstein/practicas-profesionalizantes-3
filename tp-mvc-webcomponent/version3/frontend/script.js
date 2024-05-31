import { WCCalculatorModel } from './WCCalculatorModel.js'
import { WCCalculatorView } from './WCCalculatorView.js'

// eslint-disable-next-line func-style
function main() {
  const wcCalculatorModel = new WCCalculatorModel()
  const wcCalculatorView = new WCCalculatorView(wcCalculatorModel)
  document.body.appendChild(wcCalculatorView)
}

window.onload = main
