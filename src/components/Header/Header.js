import React from "react";
import Logo from "../Logo/Logo";

function Header({ mixClass = '', children }) {
  const headerClass = ['header', mixClass].join(' ');

  return (
    <header className={headerClass}>
      <Logo />
      { children }
    </header>
  );
}

export default Header;
