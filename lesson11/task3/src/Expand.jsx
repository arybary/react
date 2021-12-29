import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Expand = ({ children, title, isContent, toggleContent }) => {
  let status = !isContent
    ? { content: null, chevron: faChevronDown }
    : { content: children, chevron: faChevronUp };
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={toggleContent}>
          <FontAwesomeIcon icon={status.chevron} />
        </button>
      </div>
      <div className="expand__content">{status.content}</div>
    </div>
  );
};

export default Expand;
