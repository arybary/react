import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online",
  };

  componentDidMount() {
    window.addEventListener("offline", this.onOffline);
    window.addEventListener("online", this.onOnline);
  }

  onOffline = () => {
    this.setState({ status: "offline" });
   
  };
  onOnline = () => {
    this.setState({ status: "online" });
    
  };
  

  componentWillUnmount() {
    window.removeEventListener("offline", this.onOffline);
    window.removeEventListener("online", this.onOnline);
  }
  render() {let statusLine ="online"
    if(this.state.status==="offline"){statusLine="status status_offline"} else {statusLine="status"}
    
    return (<div className={statusLine}>{this.state.status}</div>);
  }
}

export default ConnectionStatus;
