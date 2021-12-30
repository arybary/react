import React from "react";

const Task = ({ text, done }) => {
  const listItemClasses = `list-item ${done ? "list-item_done __text" : ""}`;
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
      />
      {text}
      <button className="list-item__delete-btn"></button>
    </li>
  );
};
export default Task;
