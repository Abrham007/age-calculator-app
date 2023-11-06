import React, { useEffect, useState } from "react";
import DateInput from "./DateInput";
import DateOutput from "./DateOutput";

function App() {
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [isDayValid, setIsDayValid] = useState(true);
  const [isMonthValid, setIsMonthValid] = useState(true);
  const [isYearValid, setIsYearValid] = useState(true);

  const [age, setAge] = useState({
    years: "",
    months: "",
    days: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDate((prevValue) => ({ ...prevValue, [name]: value }));
  }

  useEffect(() => {
    handleErrorCheck();
  }, [date]);

  function calcAge() {
    if (isDayValid && isMonthValid && isYearValid) {
      let today = new Date();
      let birthDate = new Date();
      birthDate.setFullYear(
        parseInt(date.year),
        parseInt(date.month - 1),
        parseInt(date.day)
      );

      let age = today - birthDate;
      let yearFull = age / 31556952000;
      let monthFull = (yearFull - Math.floor(yearFull)) * 12;
      let dayFull = (monthFull - Math.floor(monthFull)) * 30;

      setAge({
        years: Math.floor(yearFull),
        months: Math.floor(monthFull),
        days: Math.floor(dayFull),
      });
    }
  }

  function handleErrorCheck() {
    if (parseInt(date.day) > 31 || date.day < 0) {
      setIsDayValid(false);
    }
    if (parseInt(date.month - 1) > 12 || date.month < 0) {
      setIsMonthValid(false);
    }
    if (parseInt(date.year) > new Date().getFullYear() || date.year < 0) {
      setIsYearValid(false);
    }
  }

  return (
    <main className="main">
      <DateInput
        handleChange={handleChange}
        date={date}
        isDayValid={isDayValid}
        isMonthValid={isMonthValid}
        isYearValid={isYearValid}
      />
      <div className="btn-div">
        <hr className="btn-div__line"></hr>
        <div className="btn-div__btn" onClick={calcAge}>
          <img
            className="btn-div__svg"
            src="assets/images/icon-arrow.svg"
            alt="icon-arrow"
          ></img>
        </div>
      </div>
      <DateOutput age={age} />
    </main>
  );
}

export default App;
