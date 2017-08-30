import React, { Component } from 'react'

class OfferItem extends Component {
  render () {
    return (
      <a href={this.props.url} target="_blank">
        <ul key={this.props.id} id="nav-jobs" className="jobs-item row">
          <li
            className="jobs-item__company col s3 l2 center"
            data-themeable="first">
            {this.props.company}
          </li>
          <li className="jobs-item__job col s6 l7">{this.props.job}</li>
          <li className="jobs-item__date col s3">{this.props.date}</li>
        </ul>
      </a>
    )
  }
}

export default OfferItem
