import React, { Component } from 'react'
import { connect } from 'react-redux'

import OfferItem from './OfferItem'

const OfferListHeader = () => (
  <ul id="nav-mobile" className="jobs-header row">
    <li className="jobs-header__element col s2 m2 l2"><a href="">Site
      <i className="fa fa-sort-desc align-vertical" aria-hidden="true"></i></a>
    </li>
    <li className="jobs-header__element col s7 m7 l7"><a href="">Job
      <i className="fa fa-sort-desc align-vertical" aria-hidden="true"></i></a>
    </li>
    <li className="jobs-header__element col s3 m3 l3"><a href="">Date
      <i className="fa fa-sort-desc align-vertical" aria-hidden="true"></i></a>
    </li>
  </ul>
)

class OfferList extends Component {
  render () {
    if (this.props.offers.length) {
      return (
        <div className="jobs">
          <OfferListHeader />

          <div className="jobs-item-container">
            {this.props.filter.map(offer => <OfferItem key={offer.id} {...offer}/>)}
          </div>
        </div>
      )
    }

    // @diemano can you style the message div below?
    return (
      <div className="jobs">
        <OfferListHeader />

        <div>{this.props.offerList.message}</div>
      </div>
    )
  }
}

export default connect(
  (state) => (state)
)(OfferList)
