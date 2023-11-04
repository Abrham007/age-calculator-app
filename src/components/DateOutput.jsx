import React from "react";

function DateOutput(props) {
  return (
    <div className="date-output">
      <div className="date-output__item">
        <p className="text-L--alt">
          {props.age.years ? props.age.years : "- -"}
        </p>
        <p className="text-L">years</p>
      </div>
      <div className="date-output__item">
        <p className="text-L--alt">
          {props.age.months ? props.age.months : "- -"}
        </p>
        <p className="text-L">months</p>
      </div>
      <div className="date-output__item">
        <p className="text-L--alt">
          {props.age.days ? props.age.days : "- -"}{" "}
        </p>
        <p className="text-L">days</p>
      </div>
    </div>
  );
}

export default DateOutput;
