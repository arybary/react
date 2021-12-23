import React, { Component } from "react";
import Spinner from "./Spinner.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      spinnerOff: true,
    };
  }

  onLogin = () => {
    this.setState({ isLoggedIn: false });
  };

  onLogout = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <div className="panel">
        {this.state.isLoggedIn ? (
          <Login onLogin={this.onLogin} />
        ) : (
          <>
            <Spinner size={50} />
            <Logout onLogout={this.onLogout} />{" "}
          </>
        )}
      </div>
    );
  }
}

export default Auth;
