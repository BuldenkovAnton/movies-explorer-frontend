import React, { useMemo } from "react";

function Form({ name, mixClass, onSubmit, children}) {
  const formClass = useMemo(() => {
    return ['form', mixClass].join(' ');
  }, [mixClass]);

  return (
    <form name={name} className={formClass} onSubmit={onSubmit} noValidate>
      { children }
    </form>
  );
}

export default Form;