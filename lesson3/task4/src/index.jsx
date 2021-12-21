import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Greeting from "./Greeting.jsx";

const rootElement = document.querySelector("#root");


ReactDOM.render(<Greeting 
    firstName="Tom"
    lastName="Doe"
    birthDate= {new Date(2019,11,31)}
    />, rootElement);