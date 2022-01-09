import React, { useState, useEffect } from "react";
import Day from "../day/Day";
import PropTypes from "prop-types";
import "./week.scss";

const Week = ({ weekDates, events, onDelete, onCreate }) => {
  const [line, setLine] = useState({
    id:0,
    title: " ",
    description: " ",
    dateFrom: new Date(),
    dateTo: new Date(),
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setLine({
        id:0,
        ttitle: " ",
        description: " ",
        dateFrom: new Date(),
        dateTo: new Date(),
      });
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const newEvents = [...events, line];
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        //getting all events from the day we will render
        const dayEvents = newEvents.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dateClick={dayStart}
            dayEvents={dayEvents}
            onDelete={onDelete}
            onCreate={onCreate}
            events={events}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  events: PropTypes.array.isRequired,
  weekDates: PropTypes.array.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Week;
