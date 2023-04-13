// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: '0'}

  onGenerate = () => {
    const number = Math.floor(Math.random() * 100)
    this.setState({num: number})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Random Number</h1>
          <p>
            Generate a random number in the
            <br /> range of 0 to 100
          </p>
          <button type="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="number">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
