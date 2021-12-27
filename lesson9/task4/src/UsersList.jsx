import React, { Component } from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends Component {
  state = {
    users: this.props.users,
  };
  render() {
    return (
      <div>
        <Filter users={this.state.users} />;
      </div>
    );
  }
}

export default UsersList;
