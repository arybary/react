import React from "react";

const Expand = ({ children, title, isExpended, toggleContent }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={toggleContent}>
          <i
            className={isExpended ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          />
        </button>
      </div>
      <div className="expand__content">{isExpended ? children : ""}</div>
    </div>
  );
};

export default Expand;
