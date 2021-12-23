import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }

  setNameColor = (name) => {
    this.setState({
      color: name,
    });
  };
  render() {
    return (
      <div>
      <div class="picker__title">
       {this.state.color}
      </div>
      <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setNameColor("Coral")}
            onMouseLeave={() => this.setNameColor("")}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setNameColor("Aqua")}
            onMouseLeave={() => this.setNameColor("")}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setNameColor("Bisque")}
            onMouseLeave={() => this.setNameColor("")}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
