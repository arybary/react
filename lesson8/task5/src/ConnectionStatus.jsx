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
    this.onRedLine(this.state.status);
  };
  onOnline = () => {
    this.setState({ status: "online" });
    this.onRedLine(this.state.status);
  };
  onRedLine = (stat) =>
    stat === "offline"
      ? document.querySelector(".status").classList.add("status_offline")
      : document.querySelector(".status").classList.remove("status_offline");

  componentWillUnmount() {
    window.removeEventListener("offline", this.onOffline);
    window.removeEventListener("online", this.onOnline);
  }
  render() {
    return (<div className="status">{this.state.status}</div>);
  }
}

export default ConnectionStatus;
