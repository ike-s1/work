import React from 'react';
import '../../scss/components/pilots.scss';


export default function Pilots() {
  return (
    <section className="pilots">
        <h1 className="pilots__title title-purpl">
            EXPERIENCED PILOTS
        </h1>
        <div className="pilots__content">
          <div className="pilots__one">
            <img src="/images/pilots/femaleLegendary.png" alt="pilot" />
          </div>
            <div className="pilots__text">
            Battlemechs are extremely rare. However, people are able to control that monsters are much more infrequent. 
            <br/><br/>
            There are no 2 equal pilots in the galaxy. Each of them has unique set of skills. Combine them to achieve the most effective<br/>
            synergy.
            <br/><br/>
            Pilots are divided by their experience. The most skilled are well-known like rock stars.
            </div>
            <div className="pilots__two">
            <img src="/images/pilots/maleLegendary.png" alt="pilot" />
          </div>
        </div>
    </section>
  )
}
