import React from "react";
import "./style.scss";

const BoxCard = ({ name, timestamp, onClick }) => {
  return (
    <div className="box-container col-md-2 mb-2">
      <div className="box" onClick={() => onClick()}>
        <div className="details">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default BoxCard;
