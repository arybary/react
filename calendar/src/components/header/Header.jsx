import React, { useState } from "react";

import { months } from "../../utils/dateUtils.js";
import Modal from "../modal/Modal.jsx";

import "./header.scss";

const Header = ({ today, toggleWeek, onCreate }) => {
  const [visibility, setVisibility] = useState(false);

  const popupClose = (e) => {
    setVisibility(e);
  };

  return (
    <header className="header">
      <button
        className="button create-event-btn"
        onClick={() => {
          setVisibility(!visibility);
        }}
      >
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      {!visibility ? null : <Modal show={visibility} onClose={popupClose} onCreate={onCreate} />}
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
          {months[today.getMonth()]}
        </span>
      </div>
    </header>
  );
};

export default Header;
