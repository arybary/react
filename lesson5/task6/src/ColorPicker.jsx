import React, { Component } from "react";

class ColorPicker extends Component {
  setBodyColor = (color) => {
    const enterElem = document.querySelector(".picker__title");
    enterElem.textContent = color;
  };

  render() {
    return (
      <div>
        <div className="picker__title"></div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setBodyColor("Coral")}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setBodyColor("Aqua")}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setBodyColor("Bisque")}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
