import React, {Component} from 'react'

class Counter extends Component {
  render() {
    return (
      <div>
        <p>Count: {this.props.count}</p>
        <button onClick={() => this.props.increment()}>Increment</button>
      </div>
    )
  }
}
export default Counter;
