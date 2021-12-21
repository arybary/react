import React from "react";
import moment from "moment";

export default (props) => {
  const  date = moment(props.user.birthDate).format("DD MMM YY");
 
  return (
    <div className="profile">
      <div className="profile__name"> {`${props.user.firstName} ${props.user.lastName}`}</div>
      <div className="profile__birth"> {`Was born ${date} in ${props.user.birthPlace}`}</div>     
    </div>
  );
};
