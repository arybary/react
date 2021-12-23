import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  onButton = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <button className='counter__button' onClick={()=>this.onButton()}>
        {this.state.active ? 'On' : 'Off'}
      </button>
    );
  }
}
export default Toggler;
