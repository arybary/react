import React, { Component } from "react";
import UserForm from "./UserForm";

class App extends Component {

  createUser = (obj) => {
    console.log(obj);
  };

  render() {
    return <UserForm {...this.createUser({
      name: "sfsg",
      student: true,
      occupation: "London",
      about: "vxv",
    })}/>;
  }
}

export default App;
