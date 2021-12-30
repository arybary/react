import React, { Component } from "react";
import Task from "./Task";

class TasksList extends Component {
  state = {
    tasks: [],
  };
  getTasks = () => {
    fetch("https://61cdc8267067f600179c5c46.mockapi.io/tasks")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          tasks: data,
        })
      );
  };
  componentDidMount() {
    this.getTasks();
  }
  render() {
    return (
      <ul className="list">
        {this.state.tasks.map((task) =>
        <Task key={task.id} {...task} /> )}
      </ul>
    );
  }
}

export default TasksList;
