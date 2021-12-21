import React from "react";
import "./avatarst.scss";

const Avatar = (props) => {
  return <img className="avatar" src={props.avatarUrl} alt={props.name} />;
};
export default Avatar;
