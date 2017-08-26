import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'axios'
import { debounce } from 'throttle-debounce'

import { months } from '../utils/months'
import { messages } from '../utils/messages'

const DEBOUNCE_DELAY = 300

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.fetchJobs = debounce(DEBOUNCE_DELAY, this.fetchJobs)
  }

  formatDate (postDate) {
    const date = new Date(postDate)
    const month = months[date.getMonth()]
    const day = date.getDay()

    return { month, day }
  }

  onFetchJobsSuccess (data) {
    const jobOffers = data.data.listings.listing

    if (jobOffers.length) {
      jobOffers.map((item) => {
        const { month, day } = this.formatDate(item.post_date)

        this.props.addOfferHandler({
          id: item.id,
          company: item.company.name,
          job: item.title,
          date: `${month}, ${day}`,
          url: item.url
        })
      })
    } else {
      this.props.updateOfferListHandler(messages.offerList.error)
    }
  }

  onFetchJobsFailure () {
    this.props.updateOfferListHandler(messages.offerList.error)
  }

  formatKeyword (value) {
    return value.replace(/ /g, ',')
  }

  fetchJobs (keyword) {
    const baseURL = 'https://authenticjobs.com/api/'
    const apiKey = '90fa61a37a29b5bd2b3aa145931556b6'
    const method = 'aj.jobs.search'
    const limitPerPage = 10
    const formattedKeyword = this.formatKeyword(keyword)
    const searchURL = `?api_key=${apiKey}&method=${method}&keywords=${formattedKeyword}&perpage=${limitPerPage}&format=json`

    this.props.updateSearchBarHandler(formattedKeyword)
    if (this.props.searchBar) {
      this.props.updateOfferListHandler(messages.offerList.loading)

      get(`${baseURL}${searchURL}`)
        .then((data) => {
          this.onFetchJobsSuccess(data)
        })
        .catch(this.onFetchJobsFailure.bind(this))
        .then(this.props.clearOfferListHandler())
    }
  }

  onInputChange (e) {
    this.fetchJobs(e.target.value)
  }

  render () {
    return (
      <div className="search">
        <input
          onChange={this.onInputChange.bind(this)}
          className="icon search-input"
          placeholder="&#61442;"/>
      </div>
    )
  }
}

export default connect(
  (state) => state
)(SearchBar)
