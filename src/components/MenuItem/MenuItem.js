import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ children, linkMixClass }) {
  const linkClass = ['link', linkMixClass].join(' ');

  return (
    <li className="menu__item">
      <Link to="/signup" className={linkClass}>
        { children }
      </Link>
    </li>
  );
}

export default MenuItem;