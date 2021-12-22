import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 'Off',
    };
  }

  onButton = (e) => {
    const click = e.target.textContent === 'Off';
    click
      ? this.setState({ counter: 'On' })
      : this.setState({ counter: 'Off' });
  };

  render() {
    return (
      <button className='counter__button' onClick={this.onButton}>
        {this.state.counter}
      </button>
    );
  }
}
export default Toggler;
