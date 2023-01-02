// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  changeMode = () => {
    const {onClick} = this.state
    if (onClick === true) {
      return (
        <button type="button" className="mode-2" onClick={this.changeMode}>
          Dark Mode
        </button>
      )
    }
    return (
      <button type="button" className="mode-1" onClick={this.changeMode}>
        Light Mode
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading"> Click to change mode </h1>
          <button type="button" className="mode-1" onClick={this.changeMode()}>
            Light Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
