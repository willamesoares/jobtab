import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'axios'

class DailyQuote extends Component {
  componentDidMount () {
    const url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'

    get(url)
      .then((data) => {
        const { content, title } = data.data[0]
        const quote = $(content).text()

        this.props.updateDailyQuoteHandler(quote, title)
      })
  }

  render () {
    return (
      <div className="quote-area col s12 l8 m11 offset-l2 center">
        <div className="quote-area__tag center">#Daily Quote</div>
        <div className="quote-area__dayquote">
          <i className="fa fa-quote-left cyan-text text-darken-1" aria-hidden="true"></i>
          <span className="quote-area__dayquote-text">{this.props.dailyQuote.quote}</span>
          <br />
          <strong><small>{this.props.dailyQuote.author}</small></strong>
        </div>
        <div className="quote-area__twitter-button center">
          <a href="">
            <i className="fa fa-twitter cyan-text text-darken-1" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => (state)
)(DailyQuote)
