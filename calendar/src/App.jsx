import React, {useEffect, useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";
import { createTask, deleteTask, fetchTasksList } from "../../lesson12/task1/src/tasksGateway.js";

const App = () => {
  const [weekStartDate, setWeekStart] = useState(new Date()),
    toggleWeek = (date, day) => {
      const result = new Date(date);
      result.setDate(result.getDate() + day);
      return setWeekStart(result);
    };

  const [events, setEvents] = useState([]);

  const fetchList = () => {
    fetchTasksList().then((data) => {
      setEvents(data);
    });
  };
 const onCreate = (newTask) => {
    createTask(newTask).then(() => fetchList());
  };
  const handleTaskDelete = (id) => {
    deleteTask(id).then(() => fetchList());
  };
  useEffect(() => {
    fetchList();
  }, []);

  const [visibility, setVisibility] = useState(false);

  const popup = (vis) => {
    setVisibility(vis);
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
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

  return (
    <>
      <Header today={weekStartDate} toggleWeek={toggleWeek} onCreate={onCreate} visibility={visibility} popup={popup} weekDates={weekDates} events={newTasks} />
      <Calendar
        weekDates={weekDates}
        events={newTasks}
        onDelete={handleTaskDelete}
        onCreate={onCreate}
      
      />
    </>
  );
};

export default App;
