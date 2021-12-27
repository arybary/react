import React, { Component } from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends Component {
  render() {
    console.log(this.props.users);

    return <Filter users={this.props.users} />;
  }
}

export default UsersList;
