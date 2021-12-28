import React from "react";


const UserMenu = ({ name, location, avatar_url}) => {
  return (
    <div className="menu">
        <span className="menu__greeting">
         {`Hello, ${name}`}
        </span>
        <img
          alt="User Avatar"
          src={avatar_url}
          className="menu__avatar"
        />
      </div>
  );
};
export default UserMenu;
