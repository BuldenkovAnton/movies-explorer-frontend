import React, { useMemo } from "react";

function Navigation({ navClass = "", mixClass = "", children }) {
  const ulClass = useMemo(() => {
    return ['navigation', mixClass].join(' ');
  }, [mixClass])

  return (
    <nav className={navClass}>
      <ul className={ulClass}>{children}</ul>
    </nav>
  );
}

export default Navigation;
