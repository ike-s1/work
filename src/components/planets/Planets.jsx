import React from 'react';
import '../../scss/components/planets.scss';

export default function Planets() {
  return (
    <section className="planets">
        <h1 className="planets__title title-purpl">
        FEUDAL PLANETS!
        </h1>
        <div className="planets__body">
        <div className="planets__img">
          <img src="#" alt="planet" />
        </div>
        <div className="planets__text">
          <p >
          Space was colonized thousand years ago. All planets in the galaxy are controlled by mighty states. However, for your loyalty you can get the whole planet under control as feudal allotment. 
          <br/><br/>
          Planets require you to mine valuable void crystals and provide tournaments.
          </p>
        </div>
        </div>
    </section>
  )
}
