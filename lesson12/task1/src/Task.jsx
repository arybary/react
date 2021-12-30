import React from "react";
import classNames from "classnames"
import PropTypes from "prop-types";

const Task = ({ text, done }) => {
  const listItemClasses = classNames("list-item", {"list-item_done" : done});
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
      /> <span className="list-item__text">{text}</span>
     
      <button className="list-item__delete-btn"></button>
    </li>
  );
};
Task.propTypes = {
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
   };
  

export default Task;
