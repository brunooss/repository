import React, { Component } from "react";

import Button from "./Button.jsx";

class Item extends Component {
  state = {
    ItemsSub: [10.0, 15.0, 30.0, 40.0, 20.0]
  };
  render() {
    return (
      <div className="Item">
        <img className="ItemImg" src="https://via.placeholder.com/1x1" alt="" />
        <div>
          <h1 className="ItemTitle">{this.props.title}</h1>
          <h4 className="ItemSubtitle">Price</h4>
        </div>
        <Button />
      </div>
    );
  }
}

export default Item;
