import React, { Component } from "react";
import { Route } from "react-router-dom";
import data from "./data";

import NavWrapper from "./components/NavWrapper";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data
    };
    console.log(this.state.data);
  }
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <NavWrapper {...props} data={this.state.data} />}
        />
      </div>
    );
  }
}

export default App;
