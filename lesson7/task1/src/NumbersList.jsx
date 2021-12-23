import React, { Component } from "react";

const NumbersList = ({ numbers }) => {
  const numberElement = numbers.map((num) => <li>{num}</li>);
  return <ul>{numberElement}</ul>;
};

export default NumbersList;
