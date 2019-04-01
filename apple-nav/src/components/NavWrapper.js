import React from "react";
import { NavLink } from "react-router-dom";

const MainWrapper = props => {
  return (
    <nav className="Main-nav">
      <ul>
        {props.data.map(item => (
          <NavLink>{item.name} </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default MainWrapper;