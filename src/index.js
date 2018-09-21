import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// hot module loading
const rootEl = document.getElementById('root')

let render = () => {
  ReactDOM.render(<App />, rootEl)
}

if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render)
  })
}

render()
registerServiceWorker()
