import React, { Component } from "react";
import CreateTaskInput from "./CreateTaskInput";
import TasksList from "./TasksList";

class TodoList extends Component {
  state = {
    task: "",
  };

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };
  createTasks = () => {
    fetch("https://61cdc8267067f600179c5c46.mockapi.io/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ text: this.state.task, done: true }),
    });
  };
  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput />
          <TasksList />
        </main>
      </>
    );
  }
}
export default TodoList;
