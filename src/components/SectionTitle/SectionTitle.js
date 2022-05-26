import React from "react";

function SectionTitle({ children, mixClass = '' }) {
  const styleClass = ['section-title', mixClass].join(' ');

  return (
    <h2 className={styleClass}>
        { children }
    </h2>
  );
}

export default SectionTitle;