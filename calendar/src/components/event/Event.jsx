import React, { useState } from "react";

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
            setVisibility(!visibility);
          }}
        >
          <div className="event__title">{title}</div>
          <div className="event__time">{time}</div>
          {visibility && trueDelete ? (
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
