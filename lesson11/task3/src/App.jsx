import React, { Component } from "react";
import Expand from "./Expand.jsx";

class App extends Component {
  state = {
    isContent: false,    
  };
  toggleContent = () => {
    this.setState({ isContent: !this.state.isContent });
  };
 

  render() {
    return (
      <div className="app">
        <Expand title="Some title" isContent={this.state.isContent} toggleContent={this.toggleContent}>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a className.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
