import moment from "moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Indicator from "../Indicator/Indicator";
import "./style.scss";

const CircleCard = ({ name, timestamp, onClick }) => {
  const [isWorking, setIsWorking] = useState(true);
  useEffect(() => {
    const lastActive = moment(timestamp);
    const timeNow = moment();
    if (timeNow.diff(lastActive, "h") > 24) {
      setIsWorking(false);
    }
  }, [timestamp]);
  return (
    <div className="circle-container col-md-2 mb-2">
      <div className="circle" onClick={() => onClick()}>
        <div className="details">
          <p>{name}</p>
          <Indicator isWorking={isWorking} />
        </div>
      </div>
    </div>
  );
};

export default CircleCard;
