import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div className="back-panel">
      <div className="back-link">
        <div className="back-button">
          <Link to="/home">
            <small>Back</small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackButton;
