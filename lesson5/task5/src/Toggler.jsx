import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: "OFF",
    };
  }

  onButton = (e) => {
    const click = e.target.textContent === "OFF";
    click
      ? this.setState({ counter: "ON" })
      : this.setState({ counter: "OFF" });
  };

  render() {
    return (
      <button className="counter__button" onClick={this.onButton}>
        {this.state.counter}
      </button>
    );
  }
}
export default Toggler;
