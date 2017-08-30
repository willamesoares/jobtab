import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setTheme } from '../actions/theme'

class ThemePicker extends Component {
  componentDidMount () {
    const themeableItems = $('[data-themeable]')

    chrome.storage.sync.get(['theme'], (items) => {
      if (items.theme) {
        this.props.setTheme(items.theme)
      }
    })
  }

  onThemePickerClick (e) {
    const theme = $(e.target).data('theme')
    this.props.setTheme(theme)

    chrome.storage.sync.set({theme})
  }

  render () {
    return (
      <div className="page-theme center">
        <ul className="page-theme__items">
          <li className="page-theme__item">
            <i className="fa fa-paint-brush" aria-hidden="true"></i>
          </li>
          <li className="page-theme__item">
            <img
              src="https://raw.githubusercontent.com/diemano/chingu-extension/master/src/theme-1-blue.png"
              data-theme="first"
              onClick={this.onThemePickerClick.bind(this)}/>
          </li>
          <li className="page-theme__item">
            <img
              src="https://raw.githubusercontent.com/diemano/chingu-extension/master/src/theme-2-yellow.png"
              data-theme="second"
              onClick={this.onThemePickerClick.bind(this)}/>
          </li>
          <li className="page-theme__item">
            <img
              src="https://raw.githubusercontent.com/diemano/chingu-extension/master/src/theme-3-red.png"
              data-theme="third"
              onClick={this.onThemePickerClick.bind(this)}/>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(
  (state) => state,
  { setTheme }
)(ThemePicker)
