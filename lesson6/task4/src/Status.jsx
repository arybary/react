import React, { Component } from "react";

import Offline from "./Offline.jsx";
import Online from "./Online.jsx";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false,
    };
  }

  render() {
    return (
      <div class="status">
        {this.state.isOnline ? (
          <Online  />
        ) : (
          <Offline />
        )}
 
      </div>
    );
  }
}

export default Auth;
