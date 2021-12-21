import React from "react";
import "./avatar.scss";

const UserAvatar = (props) => {
  return (
    <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
};
export default UserAvatar;
