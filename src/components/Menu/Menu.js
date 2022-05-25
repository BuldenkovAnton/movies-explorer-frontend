import React from "react";

function Menu({ children, mixClass }) {
  const ulClass = ['menu', mixClass].join(' ');
  return (
    <ul className={ ulClass }>
      { children }
    </ul>
  );
}

export default Menu;