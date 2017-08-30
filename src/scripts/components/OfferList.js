import React, { Component } from 'react'
import { connect } from 'react-redux'

import OfferItem from './OfferItem'
import Spinner from './Spinner'

const OfferListHeader = () => (
  <ul id="nav-mobile" className="row jobs-header">
    <li className="jobs-header__element col s3 l2">
      Site
    </li>
    <li className="jobs-header__element col s6 l7">
      Job
    </li>
    <li className="jobs-header__element col s3 l2">
      Date
    </li>
  </ul>
)

class OfferList extends Component {
  render () {
    if (this.props.offers.length) {
      return (
        <div className="jobs">
          <OfferListHeader />

          <div className="jobs-item-container" data-themeable={this.props.theme}>
            {this.props.filter.map(offer => <OfferItem key={offer.id} {...offer}/>)}
          </div>
        </div>
      )
    }

    if (this.props.offerList.message === 'loading') {
      return (
        <Spinner />
      )
    } else {
      return (
        <div className="jobs-message-container">
          <strong>{this.props.offerList.message}</strong>
        </div>
      )
    }

  }
}

export default connect(
  (state) => (state)
)(OfferList)
