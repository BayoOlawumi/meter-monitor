import React from "react";
import "./style.scss";

const Indicator = ({ isWorking }) => {
  return (
    <div className="indicator-container">
      <div className={isWorking ? "rectangle green" : "rectangle red"}></div>
    </div>
  );
};

export default Indicator;
