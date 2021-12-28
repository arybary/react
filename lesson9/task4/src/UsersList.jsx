import React, { Component } from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends Component {
  state = {
    users: this.props.users   
  };


  updateData = (value) => {
    this.setState({ filterText: value});
  };

  render() {
    console.log(this.state.filterText);
    let newList;
    newList =
      !this.state.filterText
        ? this.props.users
        : this.props.users.filter(
            (user) => user.name === this.state.filterText
          );

    return (
      <div>
        <Filter updateData={this.updateData} count={newList.length}/>
        <ul className="users">
          {newList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
