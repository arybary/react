import React, { useEffect, useState } from "react";

import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import events, { fetchTasksList, deleteTask } from "../../gateway/events";

import "./calendar.scss";

const Calendar = ({ weekDates,events,onDelete }) => {
 
  const newTasks = events.map((e) => {
    const { id, title, date, startTime, endTime, description } = e;
    return {
      id,
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };
  });
  console.log(newTasks);
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={newTasks}
            onDelete={onDelete}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
