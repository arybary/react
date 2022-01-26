import React, { Component } from 'react';
import Spinner from './Spinner.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

//algo
//1.show login by defualt
//2.after login click -spinner for 2 sec
//
//

class Auth extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedIn: true,
  //     isProcessing: true,
  //   };
  // }
  state = {
    isLoggedIn: false,
    isLoading: false,
  };

  onLogin = () => {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLoading: false,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({ isLoggedIn: false, isLoading: false });
  };

  render() {
    const { isLoggedIn, isLoading } = this.state;
    if (isLoading) {
      return <Spinner />;
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.onLogout} />;
    }
    return <Login onLogin={this.onLogin} />;
  }
}

export default Auth;
