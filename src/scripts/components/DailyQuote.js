import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'axios'

const MAX_QUOTE_LENGTH = 300

class DailyQuote extends Component {
  componentDidMount () {
    const url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'

    get(url)
      .then((data) => {
        const { content, title } = data.data[0]
        const quote = $(content).text()

        if(quote.length < MAX_QUOTE_LENGTH) {
          this.props.updateDailyQuoteHandler(quote, title)
        }
      })
  }

  render () {
    const twitterIntentURL = `https://twitter.com/share?url=https://chrome.google.com/webstore/detail/jobtab/pamlioaljgkpkgnmbedlbekgnoodgeeo&hashtags=jobtab%2Cdailyquote&text=${this.props.dailyQuote.quote}`

    return (
      <div className="quote-area col s12 l8 m11 offset-l2 center">
        <div
          className="quote-area__tag center"
          data-themeable={this.props.theme}>
          #Daily Quote
        </div>
        <div className="quote-area__dayquote">
          <i
            className="fa fa-quote-left"
            data-themeable={this.props.theme}
            aria-hidden="true">
          </i>
          <span className="quote-area__dayquote-text">{this.props.dailyQuote.quote}</span>
          <br />
          <strong><small>{this.props.dailyQuote.author}</small></strong>
        </div>
        <div className="quote-area__twitter-button center">
          <a
            href={twitterIntentURL}
            target="_blank">
            <i
              className="fa fa-twitter"
              data-themeable={this.props.theme}
              aria-hidden="true">
            </i>
          </a>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => (state)
)(DailyQuote)
