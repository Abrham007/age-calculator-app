import React from "react";

function DateInput() {
  return (
    <fieldset className="date-input">
      <div className="date-input__item">
        <label className="text-S">day</label>
        <input
          className="date-input__input text-M"
          type="number"
          placeholder="DD"
        ></input>
      </div>
      <div className="date-input__item">
        <label className="text-S">month</label>
        <input
          className="date-input__input text-M"
          type="number"
          placeholder="MM"
        ></input>
      </div>
      <div className="date-input__item">
        <label className="text-S">year</label>
        <input
          className="date-input__input text-M"
          type="number"
          placeholder="YYYY"
        ></input>
      </div>
    </fieldset>
  );
}

export default DateInput;
