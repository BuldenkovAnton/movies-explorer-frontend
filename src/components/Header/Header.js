import React, { useMemo } from "react";
import Logo from "../Logo/Logo";

function Header({ children, mixClass = '' }) {
  const headerClass = useMemo(() => {
    return ['header', mixClass].join(' ');
  }, [mixClass]);

  return (
    <header className={headerClass}>
      <Logo />

      { children }
    </header>
  );
}

export default Header;
