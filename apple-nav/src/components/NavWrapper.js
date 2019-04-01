import React from "react";
import { NavLink, Route } from "react-router-dom";

const MainWrapper = props => {
  return (
    <nav className="Main-nav">
      <ul>
        {props.data.map(item => (
          <>
            <NavLink activeClassName="active" to={`/${item.id}`}>
              {item.name}
            </NavLink>
          </>
        ))}
      </ul>
    </nav>
  );
};

export default MainWrapper;
