import React from "react";
import Logo from "../Logo/Logo";

function Header({ children }) {
  return (
    <header className="page__header header">
      <Logo />
      { children }
    </header>
  );
}

export default Header;
