import React, { Component } from 'react'
import { connect } from 'react-redux'

import { filterOffers, removeFilter } from '../actions/filter-offers'

class SearchFilter extends Component {
  constructor (props) {
    super(props)

    this.onFilterClick = this.onFilterClick.bind(this)
  }

  setFilterClass ($filterLinks, $filterTag) {
    $filterLinks.removeClass('active')
    $filterTag.addClass('active')
  }

  onFilterClick (e) {
    const $filterTag = $(e.target)
    const $filterLinks = $filterTag.closest('.filter').find('.filter-link')
    const tag = $filterTag.data('tag')
    const { offers } = this.props

    e.preventDefault()
    this.setFilterClass($filterLinks, $filterTag)

    if (tag === 'all') {
      return this.props.removeFilter(this.props.offers)
    }

    this.props.filterOffers({ tag, offers })
  }

  render () {
    return (
      <div
        className="filter center"
        data-filter
        data-themeable={this.props.theme}>
        Filter by:
        <a
          href=""
          className="filter-link"
          data-tag="today"
          onClick={this.onFilterClick}>
          today
        </a> |

        <a
          href=""
          className="filter-link"
          data-tag="week"
          onClick={this.onFilterClick}>
          this week
        </a> |

        <a
          href=""
          className="filter-link"
          data-tag="month"
          onClick={this.onFilterClick}>
          this month
        </a> |

        <a
          href=""
          className="filter-link"
          data-tag="all"
          onClick={this.onFilterClick}>
          all
        </a>
      </div>
    )
  }
}

export default connect(
  (state) => state,
  {
    filterOffers,
    removeFilter
  }
)(SearchFilter)
