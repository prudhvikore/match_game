import {Component} from 'react'

import './index.css'

class Navbar extends Component {
  state = {time: 60}

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {time} = this.state
    const {timerFinished} = this.props
    this.setState(prevState => ({time: prevState.time - 1}))
    if (time === 1) {
      clearInterval(this.intervalID)
      timerFinished()
    }
  }

  render() {
    const {score} = this.props
    const {time} = this.state

    return (
      <nav className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
        <div className="navbar-sub">
          <p className="text">
            Score: <span>{score}</span>
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="text">
            <span>{time}</span> sec
          </p>
        </div>
      </nav>
    )
  }
}

export default Navbar
