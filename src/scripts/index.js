import React from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'

import { store } from './store/index'
import { updateTime } from './actions/hours'

import App from './containers/App'

const actions = bindActionCreators({
  updateTime
}, store.dispatch)

const render = () => {
  const state = store.getState()

  ReactDOM.render(
    <App state={state} actions={actions}/>,
    document.getElementById('clock')
  )
}

render()

store.subscribe(render)
