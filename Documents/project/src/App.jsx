import React, { Component } from "react";

import Cart from "./Cart.jsx";
import Item from "./Item.jsx";

class App extends Component {
  state = {
    itemsTitle: ["Item1", "Item2", "Item3", "Item4", "Item5"]
  };
  render() {
    return (
      <div className="Master">
        <Cart />
        {this.state.itemsTitle.map(itemsTitle => (
          <Item title={itemsTitle} />
        ))}
      </div>
    );
  }
}

export default App;
