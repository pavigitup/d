import {Component} from 'react'
import DigitalTimer from './components/DigitalTimer'

import './App.css'

class App extends Component {
  state = {startButton: false, timerLimit: 25}

  toggleStart = () => {
    this.setState(prevState => ({startButton: !prevState.startButton}))
  }

  render() {
    const {startButton, timerLimit} = this.state
    return (
      <div className="bg-con">
        <h1 className="head">Digital Timer</h1>
        <div className="response-design">
          <div className="timer-img">
            <div className="time">
              <p className="para-e">Time</p>
              <p className="para">
                {startButton ? (
                  <DigitalTimer timerLimit={timerLimit} />
                ) : (
                  `${timerLimit}:00`
                )}
              </p>
              <p className="para">{startButton ? 'Paused' : 'Running'}</p>
            </div>
          </div>
          <div className="main-con">
            <div className="start-reset-con">
              <div className="play-con">
                <button
                  type="button"
                  className="btn-design"
                  onClick={this.toggleStart}
                >
                  <img
                    src={
                      startButton
                        ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                    }
                    alt="play icon"
                    className="play-icon"
                  />
                  <p className="start-para">
                    {startButton ? 'Pause' : 'Start'}
                  </p>
                </button>
              </div>
              <div className="play-con">
                <button type="button" className="btn-design">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="play icon"
                    className="play-icon"
                  />
                  <p className="start-para">Reset</p>
                </button>
              </div>
            </div>
            <p className="limit-para">Set Time Limit</p>
            <div className="start-reset">
              <button type="button" className="minus-btn">
                -
              </button>
              <p className="time-para">25</p>
              <button type="button" className="minus-btn">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
