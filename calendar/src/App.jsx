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

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header today={weekStartDate} toggleWeek={toggleWeek} onCreate={onCreate}/>
      <Calendar
        weekDates={weekDates}
        events={events}
        onDelete={handleTaskDelete}
      />
    </>
  );
};

export default App;
