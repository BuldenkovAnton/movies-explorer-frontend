import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <Link to="/" className="link">
      <img className="logo" src={logo} alt="Димпломная работа" />
    </Link>
  );
}

export default Logo;