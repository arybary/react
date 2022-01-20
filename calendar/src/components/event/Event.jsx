import React, { useState } from "react";
import PropTypes from "prop-types";
import "./event.scss";

const Event = ({
  id,
  height,
  marginTop,
  title,
  time,
  onDelete,
  minuteBeforeEvent,
}) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const [visibility, setVisibility] = useState(false);
  const trueDelete = minuteBeforeEvent > 15 || minuteBeforeEvent < 0;

  return (
    <div
      style={eventStyle}
      className="event"
      onClick={() => {
        trueDelete
          ? setVisibility(!visibility)
          : alert("Нельзя удалять событие раньше чем за 15 мин до начала");
      }}
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {visibility ? (
        <button
          className="delete-event-btn "
          onClick={() => {
            onDelete(id);
          }}
        >
          <i className="fas fa-trash"></i>Удалить
        </button>
      ) : null}
    </div>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  minuteBeforeEvent: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Event;
