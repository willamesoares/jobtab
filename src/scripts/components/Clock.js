import React, { Component } from 'react'

class Clock extends Component {
  constructor (props) {
    super(props)

    this.state = {
      time: '',
      timeFormat: ''
    }

    this.startTime = this.startTime.bind(this)
  }

  startTime () {
    const time = new Date()
    const hours = time.getHours()
    const minutes = this.checkTime(time.getMinutes())
    const convertedHours = this.checkTime(this.convertHours(hours))
    const format = this.getTimeFormat(hours)

    this.setState({
      time: `${convertedHours}:${minutes}`,
      timeFormat: format
    })

    setTimeout(this.startTime, 5000)
  }

  convertHours (hours) {
    return hours > 12 ? hours-12 : hours
  }

  getTimeFormat (hours) {
    return hours > 12 ? 'pm' : 'am'
  }

  checkTime (value) {
    return value < 10 ? `0${value}` : value
  }

  componentDidMount () {
    this.startTime()
  }

  render () {
    return (
      <div className="clock center">
        <div className="clock__time">
          <i className="fa fa-clock-o cyan-text text-darken-1" aria-hidden="true"></i>
          <span className="clock__hours">
            {this.state.time}
            <span className="clock--format">
              {this.state.timeFormat}
            </span>
          </span>
        </div>
      </div>
    )
  }
}

export default Clock
