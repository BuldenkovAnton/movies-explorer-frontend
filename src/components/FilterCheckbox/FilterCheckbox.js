import React from "react";

function FilterCheckbox() {
  return (
    <label className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" />
      <span className="filter-checkbox__switch"></span>
      <span className="filter-checkbox__span">Короткометражки</span>
    </label>

  );
}

export default FilterCheckbox;