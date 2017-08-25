import React, { Component } from 'react'

import { connect } from 'react-redux'
import { request, get } from 'axios'

import { months } from '../utils/months'
import OfferItem from './OfferItem'

class OfferList extends Component {
  componentDidMount() {
    const baseURL = 'https://authenticjobs.com/api/'
    const apiKey = '90fa61a37a29b5bd2b3aa145931556b6'
    const method = 'aj.jobs.search'
    const keywords = 'python'
    const limitPerPage = 10
    const searchURL = `?api_key=${apiKey}&method=${method}&keywords=${keywords}&perpage=${limitPerPage}&format=json`

    get(`${baseURL}${searchURL}`)
      .then((data) => {
        const jobOffers = data.data.listings.listing

        jobOffers.map((item) => {
          const date = new Date(item.post_date)
          const month = months[date.getMonth()]
          const day = date.getDay()

          this.props.addOfferHandler({
            id: item.id,
            company: item.company.name,
            job: item.title,
            date: `${month}, ${day}`
          })
        })
      })
      .catch(() => {
        console.log('fail')
      })
  }

  render () {
    return (
      <div className="jobs">
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

        <div>
          {this.props.offers.map(offer => <OfferItem key={offer.id} {...offer}/>)}
        </div>

        <div className="jobs-more center"><a href="#"> MORE
          <i className="fa fa-sort-desc align-vertical" aria-hidden="true"></i></a>
        </div>
      </div>

    )
  }
}

export default connect(
  (state) => ({offers: state.offers})
)(OfferList)
