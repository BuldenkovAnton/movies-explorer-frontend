import React from "react";

function Form({ name, onSubmit, children}) {
  return (
    <form name={name} className="form" onSubmit={onSubmit} noValidate>
      { children }
    </form>
  );
}

export default Form;