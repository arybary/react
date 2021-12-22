import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div className="counter">
        <button
          data-action="decrease"
          className="counter__button"
          onClick={this.decrement}
        >
          -
        </button>
        <span className="counter__value">{this.state.counter}</span>
        <button
          data-action="increase"
          className="counter__button"
          onClick={this.increase}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
