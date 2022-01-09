import React from "react";
import PropTypes from "prop-types";
import { days } from "../../utils/dateUtils.js";
import moment from "moment";

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate, index) => {
        let colorWeek =
          moment(dayDate).format("MMMM Do YYYY") !==
          moment(new Date()).format("MMMM Do YYYY")
            ? { backgroundColor: "cornflowerblue", color: "#fff" }
            : { backgroundColor: "red", color: "#000", fontWeight: "bold" };
        return (
          <div
            key={index}
            className="calendar__day-label day-label"
            style={colorWeek}
          >
            <span className="day-label__day-name">
              {days[dayDate.getDay()]}
            </span>
            <span className="day-label__day-number">{dayDate.getDate()}</span>
          </div>
        );
      })}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};
export default Navigation;
