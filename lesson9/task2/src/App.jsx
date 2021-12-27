import React, { Component } from "react";
import UserForm from "./UserForm";

class App extends Component {

  createUser = (obj,e) => {
    e.preventDefault();
    console.log(obj);
  };

  render() {
    return <UserForm createUser={this.createUser} />;
  }
}

export default App;
