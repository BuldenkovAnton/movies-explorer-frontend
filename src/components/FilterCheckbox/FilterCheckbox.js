import React, { useMemo } from "react";

function FilterCheckbox({ mixClass, title, onChange, isChecked = false }) {
  const labelClass = useMemo(() => {
    return ['filter-checkbox', mixClass].join(' ');
  }, [mixClass]);

  return (
    <label className={labelClass}>
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
