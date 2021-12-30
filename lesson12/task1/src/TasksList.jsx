import React, { Component } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";

const baseUrl = "https://61cdc8267067f600179c5c46.mockapi.io/tasks";

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    fetch(baseUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) =>
        this.setState({
          tasks: data,
        })
      );
  };

  onCreate = (text) => {
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ text, done: false }),
    }).then((respone) => {
      if (respone.ok) {
        this.fetchTasksList();
      } else {
        throw new Error("HEXYSI");
      }
    });
  };

  handleTaskStatusChange = (id) => {
    const {  done } = this.state.tasks.find((task) => task.id);
   const updateTask={ done: !done }
    fetch(baseUrl + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(updateTask),
    }).then((respone) => {
      if (respone.ok) {
        this.fetchTasksList();
      } else {
        throw new Error("HEXYSI");
      }
    });
  };

  handleTaskDelete = (id) => {
    fetch(baseUrl + `/${id}`, {
      method: "DELETE",
    }).then((respone) => {
      if (respone.ok) {
        this.fetchTasksList();
      } else {
        throw new Error("HEXYSI del");
      }
    });
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
