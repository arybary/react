import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "Online",
  };

  componentDidMount() {
    window.addEventListener("offline", this.onOffline);
    window.addEventListener("online", this.onOnline);
  }

  onOffline = (e) => {
    this.setState({ status: "Offline" });
    e.target.document.querySelector(".status").classList.add("status_offline");
    console.log(e.target.document.querySelector(".status"));
  };
  onOnline = (e) => {
    this.setState({ status: "Online" });
    e.target.document
      .querySelector(".status")
      .classList.remove("status_offline");
    console.log(e.target.document.querySelector(".status"));
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
