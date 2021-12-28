import React, { Component } from "react";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";

class App extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    this.fetchUser(this.props.userId);
  }
  fetchUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          user: data,
        })
      );
  };
  render() {
    const { user } = this.state;
    if (!user) {
      return null;
    }

    return (
      <div className="page">
        <header className="header">
          <UserMenu {...user} />
        </header>
        <UserProfile {...user} />
      </div>
    );
  }
}

export default App;
