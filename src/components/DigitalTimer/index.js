import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setTime: props.timerLimit * 60, // Convert minutes to seconds
    }
  }

  componentDidMount() {
    this.timeoutId = setInterval(this.startTimer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeoutId)
  }

  startTimer = () => {
    this.setState(prevState => ({
      setTime: prevState.setTime - 1,
    }))
  }

  render() {
    const {setTime} = this.state
    const minutes = Math.floor(setTime / 60)
    const seconds = setTime % 60

    return (
      <>
        <p>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</p>
      </>
    )
  }
}

export default DigitalTimer
