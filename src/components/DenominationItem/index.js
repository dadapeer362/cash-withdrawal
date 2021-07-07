// Write your code here
import './index.css'
import {Component} from 'react'

class DenominationItem extends Component {
  state = {amount: 2000}

  onDeleteAmount = () => {
    const {denomination, deleteAmount} = this.props
    const {id, value} = denomination
    deleteAmount(value)
  }

  render() {
    const {denomination, deleteAmount} = this.props
    const {id, value} = denomination
    return (
      <li className="list-item">
        <button className="denomination value" onClick={this.onDeleteAmount}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
