import React, { Component } from 'react'

import { connect } from 'react-redux'

import { addOffer } from '../actions/offers'

import SearchBar from '../components/SearchBar'
import SearchFilter from '../components/SearchFilter'
import OfferList from '../components/OfferList'

class SearchForm extends Component {
  render () {
    return (
      <form>
        <SearchBar />
        <SearchFilter />
        <OfferList addOfferHandler={this.props.addOffer}/>
      </form>
    )
  }
}

export default connect(
  (state) => state,
  { addOffer }
)(SearchForm)
