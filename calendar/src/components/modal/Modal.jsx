import React, { useState } from "react";
import PropTypes from "prop-types";
import "./modal.scss";
import { timeFivteen } from "../../utils/dateUtils";

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
    startTime: timeFivteen(timeStart),
    endTime: timeFivteen(timeEnd),
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
    intervalTask > 0 && originalTime && intervalTask < 6 && title !== "";

  const dataError = () => {
    const errorOriginal = !originalTime
      ? "Два события не могут пересекаться по времени "
      : "";
    const errorOneDay =
      intervalTask > 0
        ? ""
        : "Событие должно начаться и закончиться в пределах одного дня ";
    const errorMaxInterval =
      intervalTask < 6 ? "" : "Одно событие не может быть дольше 6 часов ";
    const notTitle = title !== "" ? "" : "Заполни заголовок ";
    return alert(notTitle + errorOriginal + errorOneDay + errorMaxInterval);
  };

  const createNewTask = (task) => {
    const time =
      Date.parse(newTask.dateTo) < Date.parse(new Date())
        ? alert("создаеться завершенное событие")
        : null;
    onCreate(task);
    onClose(false);
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

                trueIntervalTask ? createNewTask(task) : dataError();
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
  dateClick: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  onCreate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
