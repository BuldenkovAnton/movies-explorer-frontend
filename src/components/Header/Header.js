import React, { useMemo } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../Logo/Logo";

function Header({ children, mixClass = '' }) {
  const headerClass = useMemo(() => {
    return ['header', mixClass].join(' ');
  }, [mixClass]);

  return (
    <header className={headerClass}>
      <Logo />

      <BurgerMenu />
    </header>
  );
}

export default Header;
