import React from "react";
import "./userinfo.scss";
import Avatar from "./Avatar"
const UserInfo =(props)=> {
    return  (<div className="user-info">
    <Avatar user={props.user}
    /> {}
    <div className="user-info__name">{props.user.name}</div>
  </div>);
}
export default UserInfo