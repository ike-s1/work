import React from "react";
import "../../scss/components/stage.scss";

export default function Stage({list}) {
  return (
    <div className="stage">
      <div className="stage__content">
       <div className="stage__emphty"/>
        <div className="stage__lable">
          <div className="stage__lable-content">
            <h1 className="stage__lable-title">Stage 1. Q3 2022</h1>
            <p className="stage__lable-subtitle">MVP game application</p>
            <div className="stage__lable-list">
              <ul>
                {list.map((elem, index) => {
                  return <li key={index}>{elem}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="stage__connect">
        <img src="/images/roadmap/connect.png" alt="connect" />
      </div>
    </div>
  );
}
