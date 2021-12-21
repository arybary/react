import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import Comment from "./Comment";

const rootElement = document.querySelector("#root");

const userInfo = {
  name: "Tom",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/53406649?s=400&u=f8795d7bb075d808c3e3db199423b99729392675&v=4",
};
ReactDOM.render(
  <Comment
    author={userInfo}
    text="Good job!" 
    date={new Date("2021")} />,
  rootElement
);
