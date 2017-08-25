import React, { Component } from 'react'

class OfferItem extends Component {
  render () {
    return (
      <ul key={this.props.id} id="nav-jobs" className="jobs-item row">
        <li className="jobs-item__company col s2 m2 l2 center">{this.props.company}</li>
        <li className="jobs-item__job col s7 m7 l7">{this.props.job}</li>
        <li className="jobs-item__date col s3 m3 l3">{this.props.date}</li>
      </ul>
    )
  }
}

export default OfferItem
