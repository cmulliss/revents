import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import App from '../src/app/layout/App'

// hot module loading
const rootEl = document.getElementById('root')

let render = () => {
  ReactDOM.render(<App />, rootEl)
}

if (module.hot) {
  module.hot.accept('../src/app/layout/App', () => {
    setTimeout(render)
  })
}

render()
