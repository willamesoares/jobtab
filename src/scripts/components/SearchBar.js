import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'axios'
import { debounce } from 'throttle-debounce'

import { removeFilter } from '../actions/filter-offers'

import { months } from '../utils/months'
import { messages } from '../utils/messages'

const DEBOUNCE_DELAY = 300

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.fetchJobs = debounce(DEBOUNCE_DELAY, this.fetchJobs)
  }

  formatDate (postDate) {
    const month = months[postDate.getMonth()]
    const day = postDate.getDate()

    return { month, day }
  }

  // https://www.epochconverter.com/weeknumbers
  getWeekNumber (now) {
    const onejan = new Date(now.getFullYear(), 0, 1)
    return Math.ceil( (((now - onejan) / 86400000) + onejan.getDay() + 1) / 7 )
  }

  setTags (postDate) {
    const currentDate = new Date()
    let filters = []

    if(this.getWeekNumber(currentDate) === this.getWeekNumber(postDate)) {
      filters.push('week')
    }

    if (
      currentDate.getFullYear() === postDate.getFullYear() &&
      currentDate.getMonth() === postDate.getMonth()
    ) {

      filters.push('month')

      if (currentDate.getDate() === postDate.getDate()) {
        filters.push('today')
      }
    }

    return filters
  }

  onFetchJobsSuccess (data) {
    const jobOffers = data.data.listings.listing

    if (jobOffers.length) {
      jobOffers.map((item) => {
        const postDate =  new Date(item.post_date)
        const { month, day } = this.formatDate(postDate)
        const tags = this.setTags(postDate)

        this.props.addOfferHandler({
          id: item.id,
          company: item.company.name,
          job: item.title,
          date: `${month}, ${day}`,
          url: item.url,
          tags
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

  removeFilters () {
    this.props.removeFilter(this.props.offers)
  }

  setFilterClass () {
    $('[data-filter]').find('.filter-link').removeClass('active')
  }

  fetchJobs (keyword) {
    const baseURL = 'https://authenticjobs.com/api/'
    const apiKey = '90fa61a37a29b5bd2b3aa145931556b6'
    const method = 'aj.jobs.search'
    const limitPerPage = 50
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
        .then(this.removeFilters.bind(this))
        .then(this.setFilterClass.bind(this))
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
  (state) => state,
  { removeFilter }
)(SearchBar)
