import React from "react";

function Form({ name, mixClass, onSubmit, children}) {
  const formClass = ['form', mixClass].join(' ');

  return (
    <form name={name} className={formClass} onSubmit={onSubmit} noValidate>
      { children }
    </form>
  );
}

export default Form;