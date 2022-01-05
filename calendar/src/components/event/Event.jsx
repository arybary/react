import React, { useState } from "react";

import "./event.scss";

const Event = ({ id, height, marginTop, title, time, onDelete }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  console.log(eventStyle);
  const [visibility, setVisibility] = useState(false);
  console.log(id);
  return (
    <>
      {id === 0 ? (
        <div style={eventStyle} className="red-line"></div>
      ) : (
        <div
          style={eventStyle}
          className="event"
          onClick={() => {
            setVisibility(!visibility);
          }}
        >
          <div className="event__title">{title}</div>
          <div className="event__time">{height === 0 ? "" : time}</div>
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

export default Event;
