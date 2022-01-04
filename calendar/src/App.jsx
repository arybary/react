import React, { Component, useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [weekStartDate, setWeekStart] = useState(new Date()),
    toggleWeek = (date, day) => {
      const result = new Date(date);
      result.setDate(result.getDate() + day);
      return setWeekStart(result);
    };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header today={weekStartDate} toggleWeek={toggleWeek} />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
