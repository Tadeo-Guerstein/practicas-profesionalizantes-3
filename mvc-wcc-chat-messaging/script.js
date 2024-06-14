/* eslint-disable func-style */
import { WCChattingModel } from './WCChattingModel.js'
import { WCChattingView } from './WCChattingView.js'

function main() {
  const wcChattingModel = new WCChattingModel()
  const wcChattingView = new WCChattingView(wcChattingModel)
  document.body.appendChild(wcChattingView)
}

window.onload = main
