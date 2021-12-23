import React from "react";

const Logout = (props) => {
 
  return (
    <button className="logout" onClick={props.onClick}>
      Logout
    </button>
  );
};
export default Logout;
