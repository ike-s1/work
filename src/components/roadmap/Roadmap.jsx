import React from "react";
import { stages } from "../../data/stagesData";
import "../../scss/components/roadmap.scss";

import Stage from "./Stage";


export default function Roadmap() {

  return (
    <section className="roadmap">
      <h1 className="roadmap__title title-gold">ROADMAP</h1>
      <div className="roadmap__stages">
        {stages.map((stage) => {
          return (
            <Stage
              key={stage.id}
              id={stage.id}
              title={stage.title}
              subtitle={stage.subtitle}
              list={stage.list}
            />
          );
        })}
      </div>
    </section>
  );
}
