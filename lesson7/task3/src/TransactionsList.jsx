import React, { Component } from "react";
import Transaction from "./Transaction.jsx";

class TransactionsList extends Component {
  render() {
    return (
      <ul className="transactions">
        {this.props.users.map((trans) => (
          <Transaction key={trans.id} {...trans} />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;
