import React, { useState } from "react";
import PropTypes from "prop-types";
import "./modal.scss";

const Modal = ({
  onClose,
  onCreate,
  dateClick,
  timeStart,
  timeEnd,
  events,
}) => {
  const [task, setTask] = useState({
    title: "",
    date: dateClick,
    startTime: timeStart,
    endTime: timeEnd,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask({ ...task, [name]: value });
  };
  const { id, title, date, startTime, endTime, description } = task;
  const newTask = {
    id,
    title,
    description,
    dateFrom: new Date(`${date} ${startTime}`),
    dateTo: new Date(`${date} ${endTime}`),
  };
  const intervalTask =
    (Date.parse(newTask.dateTo) - Date.parse(newTask.dateFrom)) /
    (60 * 60 * 1000);

  const originalTime =
    events === []
      ? true
      : events.every((el) => {
          return (
            Date.parse(newTask.dateTo) < Date.parse(el.dateFrom) ||
            Date.parse(newTask.dateFrom) > Date.parse(el.dateTo)
          );
        });
  const trueIntervalTask =
    intervalTask > 0 && intervalTask < 6 && originalTime && title !== "";

  const createNewTask = (task) => {
    onCreate(task);
    onClose(false);
  };
  const timeFivteen = (time) => {
    const arrTime = time.split(":");
    const minute = Math.round(+arrTime[1] / 15) * 15;
    const minuteFiv = minute < 10 ? `0${minute}` : minute;
    const timeFiv =
      minute === 60 ? `${+arrTime[0] + 1}:00` : `${arrTime[0]}:${minuteFiv}`;
    return timeFiv;
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={(e) => onClose(false, e)}
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
                value={timeFivteen(task.startTime)}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={handleChange}
                value={timeFivteen(task.endTime)}
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

                trueIntervalTask
                  ? createNewTask(task)
                  : alert(
                      "DATA error:not an empty title, interval maximum 6 hours, original interval"
                    );
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

Modal.propTypes = {
  timeStart: PropTypes.string.isRequired,
  timeEnd: PropTypes.string.isRequired,
  dateClick: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  onCreate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
