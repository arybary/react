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
    const { currentPage } = this.state;
    const itemsPerPage = 3;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const usersList = this.props.users.slice(startIndex, endIndex);
    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          goPrev={this.goPrev}
          goNext={this.goNext}
          totalItems={this.props.users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
