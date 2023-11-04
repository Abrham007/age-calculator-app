import React, { useState } from "react";

function DateInput(props) {
  return (
    <fieldset className="date-input">
      <div className="date-input__item">
        <label className={props.isDayValid ? "text-S" : "text-S error"}>
          day
        </label>
        <input
          className={
            props.isDayValid
              ? "date-input__input text-M"
              : "date-input__input text-M error-input"
          }
          type="number"
          min={0}
          max={31}
          placeholder="DD"
          name="day"
          value={props.date.day}
          onChange={props.handleChange}
        ></input>
        <span className={props.isDayValid ? "" : "error"}>
          {props.isDayValid ? "" : "Must be a valid day"}
        </span>
      </div>

      <div className="date-input__item">
        <label className={props.isMonthValid ? "text-S" : "text-S error"}>
          month
        </label>
        <input
          className={
            props.isMonthValid
              ? "date-input__input text-M"
              : "date-input__input text-M error-input"
          }
          type="number"
          min={0}
          max={12}
          placeholder="MM"
          name="month"
          value={props.date.month}
          onChange={props.handleChange}
        ></input>
        <span className={props.isMonthValid ? "" : "error"}>
          {props.isMonthValid ? "" : "Must be a valid month"}
        </span>
      </div>

      <div className="date-input__item">
        <label className={props.isYearValid ? "text-S" : "text-S error"}>
          year
        </label>
        <input
          className={
            props.isYearValid
              ? "date-input__input text-M"
              : "date-input__input text-M error-input"
          }
          type="number"
          min={0}
          max={new Date().getFullYear()}
          placeholder="YYYY"
          name="year"
          value={props.date.year}
          onChange={props.handleChange}
        ></input>
        <span className={props.isYearValid ? "" : "error"}>
          {props.isYearValid ? "" : "Must be in the past"}
        </span>
      </div>
    </fieldset>
  );
}

export default DateInput;
