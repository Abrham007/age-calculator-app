import React, { useState } from "react";

function DateInput(props) {
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDate((prevValue) => ({ ...prevValue, [name]: value }));
  }
  props.getDate(date);

  return (
    <fieldset className="date-input">
      <div className="date-input__item">
        <label className="text-S">day</label>
        <input
          className="date-input__input text-M"
          type="text"
          placeholder="DD"
          name="day"
          value={date.day}
          onChange={handleChange}
        ></input>
      </div>
      <div className="date-input__item">
        <label className="text-S">month</label>
        <input
          className="date-input__input text-M"
          type="text"
          placeholder="MM"
          name="month"
          value={date.month}
          onChange={handleChange}
        ></input>
      </div>
      <div className="date-input__item">
        <label className="text-S">year</label>
        <input
          className="date-input__input text-M"
          type="text"
          placeholder="YYYY"
          name="year"
          value={date.year}
          onChange={handleChange}
        ></input>
      </div>
    </fieldset>
  );
}

export default DateInput;
