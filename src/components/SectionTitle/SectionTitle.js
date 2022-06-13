import React, { useMemo } from "react";

function SectionTitle({ children, mixClass = '' }) {
  const styleClass = useMemo(() => {
    return ['section-title', mixClass].join(' ');
  }, [mixClass]);

  return (
    <h2 className={styleClass}>
        { children }
    </h2>
  );
}

export default SectionTitle;