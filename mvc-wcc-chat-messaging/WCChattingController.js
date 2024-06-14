class WCChattingController {
  constructor(viewComponent, modelComponent) {
    this._viewComponent = viewComponent
    this._modelComponent = modelComponent

    this._modelComponent.addEventListener('onAddMessage', () => {
      this.onAddMessage()
    })
  }

  onLoad() {
    const messages = this._modelComponent.getMessages()
    this._viewComponent.renderMessages(messages)
  }

  onAddMessage() {
    const messages = this._modelComponent.getMessages()
    this._viewComponent.renderMessages(messages)
  }

  onSubmit() {
    const message = this._viewComponent.getMessage()
    this._modelComponent.addMessages(message)
  }

  onClickChat() {
    this._modelComponent.openForm()
  }

  onClickCancel() {
    this._modelComponent.closeForm()
  }
}

export { WCChattingController }
