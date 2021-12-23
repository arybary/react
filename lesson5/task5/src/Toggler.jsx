import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Off',
    };
  }

  onButton = () => {
    const click = this.state.active === 'Off';
    click
      ? this.setState({ active: 'On' })
      : this.setState({ active: 'Off' });
  };

  render() {
    return (
      <button className='counter__button' onClick={this.onButton}>
        {this.state.active}
      </button>
    );
  }
}
export default Toggler;
