import React from "react";
import { Link } from "react-router-dom";

function Tab({ modificatorClass, title, href = '' }) {
  const tabClass = ['tab', modificatorClass].join(' ');

  return (
    <li className={tabClass}>
      {href && (
        <Link className="link tab__link" to={href}>
          { title }
        </Link>
      )}
    </li>
  );
}

export default Tab;