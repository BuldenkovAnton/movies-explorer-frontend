import React from "react";

function NavTab({ modificatorClass, children }) {
  const ulClass = ['navtab', modificatorClass].join(' ');

  return (
    <ul className={ulClass}>
      { children }
    </ul>
  );
}

export default NavTab;