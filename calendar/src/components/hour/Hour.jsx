import React, { useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import Event from "../event/Event";
import { formatMins } from "../../../src/utils/dateUtils.js";
import Modal from "../modal/Modal";

const Hour = ({
  dataHour,
  hourEvents,
  onDelete,
  onCreate,
  dateClick,
  events,
}) => {
  const [visibility, setVisibility] = useState(false);

  const popup = (vis) => {
    setVisibility(vis);
  };
  const timeStart = dataHour < 10 ? `0${dataHour}:00` : `${dataHour}:00`;
  const timeEnd = dataHour < 9 ? `0${dataHour + 1}:00` : `${dataHour + 1}:00`;

  return (
    <div
      className="calendar__time-slot"
      data-time={dataHour + 1}
      onClick={(e) => {
        e.target.dataset.time && popup(true);
      }}
    >
      {visibility && (
        <Modal
          onClose={popup}
          onCreate={onCreate}
          dateClick={moment(dateClick).format("YYYY-MM-DD")}
          timeStart={timeStart}
          timeEnd={timeEnd}
          events={events}
        />
      )}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;
        const minuteBeforeEvent = (dateFrom - new Date()) / 60000;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            id={id}
            onDelete={onDelete}
            minuteBeforeEvent={minuteBeforeEvent}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  dateClick: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Hour;
