/* eslint-disable func-style */

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

class WCChattingView extends HTMLElement {
  constructor(modelComponent) {
    super()
    this._chattingController = new WCChattingController(this, modelComponent)

    this._chatTitle = document.createElement('h1')
    this._chatTitle.innerText = 'Chat'

    this._chatLabel = document.createElement('label')
    this._chatLabel.for = 'msg'
    this._chatLabel.innerHTML = '<b>Message</b>'

    this._chatText = document.createElement('textarea')
    this._chatText.placeholder = 'Type message...'
    this._chatText.name = 'msg'
    this._chatText.setAttribute('required', true)

    this._chatSubmit = document.createElement('button')
    this._chatSubmit.type = 'submit'
    this._chatSubmit.innerText = 'Submit'
    this._chatSubmit.className = 'btn'

    this._chatCancel = document.createElement('button')
    this._chatCancel.type = 'button'
    this._chatCancel.innerText = 'Cancel'
    this._chatCancel.className = 'btn cancel'

    this._form = document.createElement('form')
    this._form.className = 'form-container'

    this._chatContainer = document.createElement('div')
    this._chatContainer.className = 'chat-popup'
    this._chatContainer.id = 'myForm'

    this._chatOpen = document.createElement('button')
    this._chatOpen.className = 'open-button'
    this._chatOpen.innerText = 'Chat'

    this._title = document.createElement('h2')
    this._title.innerText = 'Chat Messages'

    this._messagesContainer = document.createElement('div')
    this._messagesContainer.className = 'content-container'
    this._messagesContainer.appendChild(this._title)

    this._form.appendChild(this._chatTitle)
    this._form.appendChild(this._chatLabel)
    this._form.appendChild(this._chatText)
    this._form.appendChild(this._chatSubmit)
    this._form.appendChild(this._chatCancel)
    this._chatContainer.appendChild(this._form)

    this._chattingController.onLoad()

    this.appendChild(this._chatOpen)
    this.appendChild(this._messagesContainer)
    this.appendChild(this._chatContainer)
  }

  getMessage() {
    return this._chatText.value
  }

  deleteMessages() {
    const children = [...this._messagesContainer.children]
    if (children.length > 0) {
      children.forEach((i) => {
        if (i.id === 'message') {
          this._messagesContainer.removeChild(i)
        }
      })
    }
  }

  renderMessages(messages) {
    this.deleteMessages()
    messages.forEach((i, index) => {
      const container = document.createElement('div')
      container.className = 'container dark'
      container.id = 'message'

      const image = document.createElement('img')
      image.style = 'width: 100%'
      image.alt = 'Avatar'
      image.className = 'right'
      image.src = 'https://www.w3schools.com/w3images/avatar_g2.jpg'

      const paragraph = document.createElement('p')
      paragraph.innerText = i.message

      const span = document.createElement('span')
      span.innerText = i.date
      span.className = 'time-left'

      if (index % 2 === 0) {
        container.className = 'container'
        image.className = 'left'
        image.src = 'https://www.w3schools.com/w3images/bandmember.jpg'
        span.className = 'time-right'
      }

      container.appendChild(image)
      container.appendChild(paragraph)
      container.appendChild(span)
      this._messagesContainer.appendChild(container)
    })
  }

  connectedCallback() {
    this._chatOpen.onclick = () => {
      this._chattingController.onClickChat()
    }
    this._chatCancel.onclick = () => {
      this._chattingController.onClickCancel()
    }
    this._form.onsubmit = (event) => {
      event.preventDefault()
      this._chattingController.onSubmit()
    }
  }

  disconnectedCallback() {
    this._chatOpen.onclick = null
    this._chatCancel.onclick = null
    this._form.onsubmit = null
  }

  adoptedCallback() {}

  attributesChangedCallback(oldValue, newValue) {}

  static get observableAttributes() {}
}

function main() {
  const wcChattingModel = new WCChattingModel()
  const wcChattingView = new WCChattingView(wcChattingModel)
  document.body.appendChild(wcChattingView)
}
customElements.define('x-wc-chatting-view', WCChattingView)

window.onload = main
