import React, { Component } from 'react'

class Clock extends Component {
  constructor (props) {
    super(props)

    this.getUpdatedHours = this.getUpdatedHours.bind(this)
  }

  convertHours (hours) {
    return hours > 12 ? hours-12 : hours
  }

  getTimeFormat (hours) {
    return hours >= 12 ? 'pm' : 'am'
  }

  checkTime (value) {
    return value < 10 ? `0${value}` : value
  }

  getUpdatedHours () {
    const time = new Date()
    const hours = time.getHours()
    const minutes = this.checkTime(time.getMinutes())
    const convertedHours = this.checkTime(this.convertHours(hours))
    const format = this.getTimeFormat(hours)

    this.props.updateTimeHandler({ convertedHours, minutes, format })
    setTimeout(this.getUpdatedHours, 500)
  }

  componentDidMount () {
    this.getUpdatedHours()
  }

  render () {
    const { convertedHours, minutes, format } = this.props.hours

    return (
      <div className="clock center">
        <div className="clock__time">
          <i className="fa fa-clock-o cyan-text text-darken-1" aria-hidden="true"></i>
          <span className="clock__hours">
            {`${convertedHours}:${minutes}`}
            <span className="clock--format">
              {format}
            </span>
          </span>
        </div>
      </div>
    )
  }
}

export default Clock
