import React, { Component } from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends Component {
  state = {
    currentPage: 1,
  };
  goPrev = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };
  goNext = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };
  render() {
    let usersList = this.props.users.slice(
      (this.state.currentPage - 1) * 3,
      this.state.currentPage * 3,
    );
    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          goPrev={this.goPrev}
          goNext={this.goNext}
          totalItems={this.props.users.length}
          itemsPerPage={3}
        />
        <ul class="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
