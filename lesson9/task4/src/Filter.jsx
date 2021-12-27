import React, { Component } from "react";
import User from "./User.jsx";

class Filter extends Component {
  state = {
    filterText: "",
    list: this.props.users,
  };

  handleChange = (e) => {
    const filterList = this.props.users.filter(
      (user) => user.name === e.target.value
    );
    this.setState({
      filterText: e.target.value,
      list: filterList,
    });
    e.preventDefault();

    console.log(filterList);
  };

  render() {
    let newList;
    newList = this.state.filterText === "" ? this.props.users : this.state.list;
    return (
      <div>
        <div className="filter">
          <span className="filter__count">{newList.length}</span>
          <input
            type="text"
            className="filter__input"
            onChange={this.handleChange}
            value={this.state.filterText}
          />
        </div>
        <ul className="users">
          {newList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Filter;
