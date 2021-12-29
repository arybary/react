import React from "react";


const Expand = ({ children, title, isContent, toggleContent }) => {
  let status = !isContent
    ? { content: null, chevron: "fas fa-chevron-down" }
    : { content: children, chevron: "fas fa-chevron-up" };
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={toggleContent}>
        <i className={status.chevron} />
        </button>
      </div>
      <div className="expand__content">{status.content}</div>
    </div>
  );
};

export default Expand;