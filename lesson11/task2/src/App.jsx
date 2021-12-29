import React, { Component } from "react";
import Dialog from "./Dialog";

class App extends Component {
  state = {};

  render() {
    return (
      <div class="app">
        <button class="btn">Show dialog</button>
        <Dialog />
      </div>
    );
  }
}

export default App;
