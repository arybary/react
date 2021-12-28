import React, { Component } from "react";

class Filter extends Component {
  state = {
    filterText: "",
  };

  onChange = (e) => {
    e.preventDefault();

    this.setState({
      filterText: e.target.value
    });
    this.props.onChange(this.state.filterText);
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          onChange={this.onChange}
          value={this.state.filterText}
        />
      </div>
    );
  }
}

export default Filter;
