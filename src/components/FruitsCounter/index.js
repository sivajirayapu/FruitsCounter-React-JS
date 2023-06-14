// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  clickMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  clickBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="spanEl">{mango}</span> Mangoes
            <span className="spanEl"> {banana} </span> bananas
          </h1>
          <div className="banana-mango-container">
            <div className="banana-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.clickMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.clickBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
