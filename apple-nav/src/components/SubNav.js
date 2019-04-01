import React from "react";

const SubNav = props => {
  const id = props.match.params.id;
  console.log(id);
  const subLink = props.items.find(item => `${item.id}` === id);
  console.log(subLink);
  return (
    <div className="sub">
      {subLink.sub.map(el => (
        <div className="icons">{el}</div>
      ))}
    </div>
  );
};

export default SubNav;
