import React, { Component } from 'react'

import Clock from '../components/Clock'

class App extends Component {
  render () {
    const { state, actions } = this.props

    return (
      <div className="row general">
        <div className="column-left col s12 m8 l9 grey lighten-3">
          <div className="row">
            <div className="quote-area col s12 l8 m11 offset-l2 center">
              <div className="quote-area__tag center">#Daily Quote</div>
              <div className="quote-area__dayquote">
                <i className="fa fa-quote-left cyan-text text-darken-1" aria-hidden="true"></i>
                <span className="quote-area__dayquote-text"> You are the only person with your exact blend of talents and skills.</span>
              </div>
              <div className="quote-area__twitter-button center">
                <a href="">
                  <i className="fa fa-twitter cyan-text text-darken-1" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          <Clock
            hours={state.clock.hours}
            updateTimeHandler={actions.updateTime}/>

          <div className="share-extension center">
            <div className="share-extension__button">
              <a href="#">
                <img src="https://raw.githubusercontent.com/diemano/chingu-extension/master/src/turtle.png" />
              </a>
            </div>
            <div className="share-extension__label">share this extension</div>
          </div>
        </div>
        <div className="column-right col s12 m4 l3 grey-text text-lighten-3 blue-grey darken-4">
          <div className="logo center">TabJob</div>
          <div className="search">
            <input className="icon search-input" placeholder="&#61442;"/>
          </div>
          <div className="filter center">Filter by:
            <a href="" className="filter-link">today</a>  |
            <a href="" className="filter-link">this week</a>  |
            <a href="" className="filter-link">this month</a>
          </div>
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
            <ul id="nav-jobs" className="jobs-item row">
              <li className="jobs-item__company col s2 m2 l2 center">toptotal</li>
              <li className="jobs-item__job col s7 m7 l7">Web Developer</li>
              <li className="jobs-item__date col s3 m3 l3">jul, 26</li>
            </ul>
            <ul id="nav-jobs2" className="jobs-item row">
              <li className="jobs-item__company col s2 m2 l2 center">toptotal</li>
              <li className="jobs-item__job col s7 m7 l7">FrontEnd Developer</li>
              <li className="jobs-item__date col s3 m3 l3">jul, 26</li>
            </ul>
            <div className="jobs-more center"><a href="#"> MORE
              <i className="fa fa-sort-desc align-vertical" aria-hidden="true"></i></a>
            </div>
          </div>
          <div className="page-theme center">
            <ul className="page-theme__items">
              <li className="page-theme__item">
                <i className="fa fa-paint-brush" aria-hidden="true"></i>
              </li>
              <li className="page-theme__item">
                <a href="#">
                  <img src="https://raw.githubusercontent.com/diemano/chingu-extension/master/src/theme-1-blue.png" />
                </a>
              </li>
              <li className="page-theme__item">
                <a href="#">
                  <img src="https://raw.githubusercontent.com/diemano/chingu-extension/master/src/theme-2-yellow.png" />
                </a>
              </li>
              <li className="page-theme__item">
                <a href="#">
                  <img src="https://raw.githubusercontent.com/diemano/chingu-extension/master/src/theme-3-red.png" />
                </a>
              </li>
            </ul>
          </div>
          <footer className="footer center">
              developed by <a href="#"> Turtle Team 28</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default App
