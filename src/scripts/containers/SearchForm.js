import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'
import SearchFilter from '../components/SearchFilter'
import OfferList from '../components/OfferList'

import { addOffer, clearOfferList } from '../actions/offers'
import { updateOfferListMessage } from '../actions/offer-list'
import { updateSearchBar } from '../actions/search-bar'

import { messages } from '../utils/messages'

class SearchForm extends Component {
  componentDidMount () {
    this.props.updateOfferListMessage(messages.offerList.initial)
  }

  render () {
    return (
      <div>
        <SearchBar
          addOfferHandler={this.props.addOffer}
          clearOfferListHandler={this.props.clearOfferList}
          updateSearchBarHandler={this.props.updateSearchBar}
          updateOfferListHandler={this.props.updateOfferListMessage}/>
        <SearchFilter />
        <OfferList />
      </div>
    )
  }
}

export default connect(
  (state) => state,
  {
    addOffer,
    clearOfferList,
    updateSearchBar,
    updateOfferListMessage
  }
)(SearchForm)
