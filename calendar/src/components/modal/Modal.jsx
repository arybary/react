import React, { useEffect, useState } from "react";
import { createTask, fetchTasksList } from "../../gateway/events";

import "./modal.scss";

const Modal = ({ show, onClose,onCreate }) => {
  const [task, setTask] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask({ ...task, [name]: value });
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={() => onClose(false)}
          >
            +
          </button>
          <form className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={handleChange}
              value={task.title}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={handleChange}
                value={task.date}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={handleChange}
                value={task.startTime}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={handleChange}
                value={task.endTime}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={handleChange}
              value={task.description}
            ></textarea>
            <button
              type="submit"
              className="event-form__submit-btn"
              onClick={(e) => {
                e.preventDefault();

                onCreate(task);
                onClose(false);
               
              }}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
