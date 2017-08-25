import React, { Component } from 'react'

class SearchFilter extends Component {
  render () {
    return (
      <div className="filter center">Filter by:
        <a href="" className="filter-link">today</a>  |
        <a href="" className="filter-link">this week</a>  |
        <a href="" className="filter-link">this month</a>
      </div>

    )
  }
}

export default SearchFilter
