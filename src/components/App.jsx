import React, { useState } from "react";
import DateInput from "./DateInput";
import DateOutput from "./DateOutput";

function App() {
  const [age, setAge] = useState({
    years: "",
    months: "",
    days: "",
  });

  function calcAge(birthDate) {}

  function getDate(birthDate) {
    const today = new Date();
    const date = new Date();
    date.setFullYear(
      parseInt(birthDate.year),
      parseInt(birthDate.month),
      parseInt(birthDate.day)
    );
    const age = today - date;

    const year = age / 31556952000;
    const month = (year - Math.floor(year)) * 12;
    const day = (month - Math.floor(month)) * 30;

    console.log(day);
  }

  return (
    <div className="main">
      <DateInput getDate={getDate} />
      <div className="btn-div">
        <hr className="btn-div__line"></hr>
        <button className="btn-div__btn" onClick={calcAge}>
          <img src="assets/images/icon-arrow.svg"></img>
        </button>
      </div>
      <DateOutput />
    </div>
  );
}

export default App;
