import React from "react";

export default function Stage({ id, list, title, subtitle }) {
  return (
    <div className={id % 2 !== 0 ? "stage" : "stage stage-right"}>
      <div className="stage__content">
        <div className="stage__img">
          <img src={`/images/roadmap/stage${id}.png`} alt="stage1" />
        </div>
        <div className="stage__lable lable">
          <div className="lable__content">
            <h2 className="lable__title">{title}</h2>
            <h4 className="lable__subtitle">{subtitle}</h4>
            <ul className="lable__list">
              {list.map((item) => {
                return (
                  <li key={item} className="lable__list-item">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      { id < 5 &&
      (
        <div className="stage__connect">
          <div
            className={id % 2 !== 0 ? "stage__connect" : "stage__connect-right"}
          >
            <img src="/images/roadmap/connect.png" alt="connect" />
          </div>
        </div>
      )}
    </div>
  );
}
