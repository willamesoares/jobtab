import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateTime } from '../actions/hours'
import { updateDailyQuote } from '../actions/daily-quote'

import SearchForm from './SearchForm'
import Clock from '../components/Clock'
import DailyQuote from '../components/DailyQuote'
import ThemePicker from '../components/ThemePicker'
import ShareExtensionButton from '../components/ShareExtensionButton'

class App extends Component {
  render () {
    return (
      <div className="row general">
        <div className="column-left col s12 m6 l8 grey lighten-3">
          <div className="row">
            <DailyQuote updateDailyQuoteHandler={this.props.updateDailyQuote} />
          </div>

          <Clock
            hours={this.props.clock.hours}
            updateTimeHandler={this.props.updateTime}/>

          <ShareExtensionButton />
        </div>
        <div className="column-right col s12 m6 l4 grey-text text-lighten-3 blue-grey darken-4">
          <div className="logo center">TabJob</div>

          <SearchForm />

          <ThemePicker />

          <footer className="footer center">
            developed by
            <a href="https://github.com/willamesoares/jobtab" target="_blank">
              Turtle Team 28
            </a>
          </footer>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => state,
  {
    updateTime,
    updateDailyQuote
  }
)(App)
