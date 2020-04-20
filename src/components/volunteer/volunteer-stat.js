import React from "react";
import "./volunteer-stat.css";

function Stat({ data }) {
  const { count, subTitle, text } = data;
  return (
    <div className="card">
      <div className="card-body stat-card-body">
        <div className="row h-100">
          <div className="col-sm-3 col-3 d-flex flex-column justify-content-center count">
            <span className="d-block count-value">{count}+</span>
            <span className="d-block">{subTitle}</span>
          </div>
          <div className="col-sm-9 col-9 my-auto">{text}</div>
        </div>
      </div>
    </div>
  );
}

export default Stat;
