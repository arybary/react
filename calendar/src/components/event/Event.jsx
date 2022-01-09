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
  minutePredel,
}) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const [visibility, setVisibility] = useState(false);
  const trueDelete = minutePredel > 15 || minutePredel < 0;

  return (
    <>
      {id === 0 ? (
        <div style={eventStyle} className="red-line"></div>
      ) : (
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
      )}
    </>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  minutePredel: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Event;
