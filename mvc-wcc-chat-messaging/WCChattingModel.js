class WCChattingModel extends EventTarget {
  constructor() {
    super()
    this._messages = [
      {
        message: 'Hello. How are you today?',
        date: `${new Date().getHours()}:${new Date().toISOString().split('T')[1].split(':')[1]}`
      },
      {
        message: 'Hey! Im fine. Thanks for asking!',
        date: `${new Date().getHours()}:${new Date().toISOString().split('T')[1].split(':')[1]}`
      },
      {
        message: 'Sweet! So, what do you wanna do today?',
        date: `${new Date().getHours()}:${new Date().toISOString().split('T')[1].split(':')[1]}`
      },
      {
        message: 'Nah, I dunno. Play soccer.. or learn more coding perhaps?',
        date: `${new Date().getHours()}:${new Date().toISOString().split('T')[1].split(':')[1]}`
      }
    ]
  }

  getMessages() {
    return this._messages
  }

  addMessages(message) {
    const date = `${new Date().getHours()}:${new Date().toISOString().split('T')[1].split(':')[1]}`
    this._messages.push({ message, date })
    this.dispatchEvent(new CustomEvent('onAddMessage'))
  }

  openForm() {
    document.getElementById('myForm').style.display = 'block'
  }

  closeForm() {
    document.getElementById('myForm').style.display = 'none'
  }
}

export { WCChattingModel }
