import React from "react";

const Expand = ({ children, title, isExpanded, toggleContent }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={toggleContent}>
            {isExpanded ? (
              <i className="fas fa-chevron-up" />
            ) : (
              <i className="fas fa-chevron-down" />
            )}
          </button>
      </div>
      <div className="expand__content">{isExpanded ? children : ""}</div>
    </div>
  );
};

export default Expand;
