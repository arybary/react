import React from "react";
import moment from "moment";
import { months } from "../../utils/dateUtils.js";
import Modal from "../modal/Modal.jsx";
import PropTypes from "prop-types";
import "./header.scss";

const Header = ({
  today,
  toggleWeek,
  onCreate,
  popup,
  visibility,
  weekDates,
  events,
}) => {
  const week = weekDates.map((dayDate) => dayDate.getMonth());
  const oneMonth = week[0] === week[6];

  return (
    <header className="header">
      <button
        className="button create-event-btn"
        onClick={() => popup(!visibility)}
      >
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      {!visibility ? null : (
        <Modal
          events={events}
          dateClick={moment(new Date()).format("YYYY-MM-DD")}
          onClose={popup}
          onCreate={onCreate}
          timeStart={moment(new Date()).format("H:mm")}
          timeEnd={moment(new Date()).format("H:mm")}
        />
      )}
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={() => toggleWeek(new Date(), 0)}
        >
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={() => toggleWeek(today, -7)}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={() => toggleWeek(today, +7)}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">
          {oneMonth ? months[week[0]] : `${months[week[0]]}-${months[week[6]]}`}
        </span>
      </div>
    </header>
  );
};
Header.propTypes = {
  events: PropTypes.array.isRequired,
  weekDates: PropTypes.array.isRequired,
  visibility: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  toggleWeek: PropTypes.func.isRequired,
  popup: PropTypes.func.isRequired,
  today: PropTypes.object.isRequired,
};
export default Header;
