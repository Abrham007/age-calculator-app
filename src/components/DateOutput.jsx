import React from "react";

function DateOutput() {
  return (
    <div className="date-output">
      <div className="date-output__item">
        <p className="text-L--alt">- -</p>
        <p className="text-L">years</p>
      </div>
      <div className="date-output__item">
        <p className="text-L--alt">- -</p>
        <p className="text-L">months</p>
      </div>
      <div className="date-output__item">
        <p className="text-L--alt">- -</p>
        <p className="text-L">days</p>
      </div>
    </div>
  );
}

export default DateOutput;
