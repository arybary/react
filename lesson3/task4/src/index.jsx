import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Greeting from "./Greeting.jsx";

const rootElement = document.querySelector("#root");


ReactDOM.render(<Greeting 
    firstName="Tom"
    lastName="Doe"
    birthDate= {new Date('2000-01-01T11:11:11.819Z')}
    />, rootElement);