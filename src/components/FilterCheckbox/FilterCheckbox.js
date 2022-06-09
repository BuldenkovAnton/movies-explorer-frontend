import React from "react";

function FilterCheckbox({ isChecked }) {
  return (
    <label className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        checked={isChecked}
      />
      <span className="filter-checkbox__switch"></span>
      <span className="filter-checkbox__span">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
