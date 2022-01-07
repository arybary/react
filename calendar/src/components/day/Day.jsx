import React from "react";
import Hour from "../hour/Hour";
import PropTypes from "prop-types";
import "./day.scss";

const Day = ({ events, dataDay, dayEvents, onDelete, onCreate, dateClick }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);
  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            dateClick={dateClick}
            hourEvents={hourEvents}
            onDelete={onDelete}
            onCreate={onCreate}
            events={events}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
  dateClick: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Day;
