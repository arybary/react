import React from "react";

export default (props) => {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${
        new Date().getFullYear() - props.birthDate.getFullYear()
      } years old`}
    </div>
  );
};
