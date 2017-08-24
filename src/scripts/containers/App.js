import React, { Component } from 'react'

import Clock from '../components/Clock'

class App extends Component {
  render () {
    const { state, actions } = this.props

    return (
      <Clock
        hours={state.clock.hours}
        updateTimeHandler={actions.updateTime}/>
    )
  }
}

export default App
