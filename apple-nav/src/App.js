import React, { Component } from "react";
import { Route } from "react-router-dom";
import data from "./data";

import NavWrapper from "./components/NavWrapper";
import SubNav from "./components/SubNav";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data
    };
  }
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <NavWrapper {...props} data={this.state.data} />}
        />
        <Route
          path="/:id"
          render={props => <SubNav {...props} items={this.state.data} />}
        />
      </div>
    );
  }
}

export default App;
