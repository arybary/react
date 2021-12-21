import React from "react";

export default (props) => {
  const year = Math.floor((new Date() - props.birthDate) / 31536000000);
 
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${year} years old`}
    </div>
  );
};
