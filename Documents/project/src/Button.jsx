import React, { Component } from "react";

import "./style.css";

class Button extends Component {
  state = {
    count: 0
  };
  Detect = 0;
  render() {
    return (
      <div className="ItemButtonHolder">
        <button onClick={this.clickPlusHandler} className="ItemButton">
          <i class="material-icons">add</i>
        </button>
        <button onClick={this.clickMinusHandler} className="ItemButton">
          <i class="material-icons">remove</i>
        </button>
      </div>
    );
  }

  clickPlusHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  clickMinusHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Button;
