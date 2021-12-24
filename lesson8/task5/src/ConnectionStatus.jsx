import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online",
  };

  componentDidMount() {
    window.addEventListener("offline", this.onOffline);
    window.addEventListener("online", this.onOnline);
  }

  onOffline = (e) => {
    this.setState({ status: "offline" });
    e.target.document.querySelector(".status").classList.add("status_offline");
  };
  onOnline = (e) => {
    this.setState({ status: "online" });
    e.target.document
      .querySelector(".status")
      .classList.remove("status_offline");
  };

  componentWillUnmount() {
    window.removeEventListener("offline", this.onOffline);
    window.removeEventListener("online", this.onOnline);
  }
  render() {
    return <div className="status">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
