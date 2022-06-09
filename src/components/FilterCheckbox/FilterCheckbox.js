import React from "react";

function FilterCheckbox({ title, onChange, isChecked = false }) {
  return (
    <label className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <span className="filter-checkbox__switch"></span>
      <span className="filter-checkbox__span">{title}</span>
    </label>
  );
}

export default FilterCheckbox;
