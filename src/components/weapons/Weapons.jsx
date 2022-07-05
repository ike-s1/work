import React from 'react';
import '../../scss/components/weapons.scss';

export default function Weapons() {
  return (
    <section className="weapons">
        <h1 className="weapons__title">
        DEADLY WEAPONS
        </h1>
        <div className="weapons__slider">
            <div className="weapon__item">
                <img src="/images/weapons/weapon1.png" alt="weapon" />
            </div>

            <div className="weapon__item">
                <img src="/images/weapons/weapon2.png" alt="weapon" />
            </div>
            <div className="weapon__item">
                <img src="/images/weapons/weapon3.png" alt="weapon" />
            </div>
            <p className="weapons__text">
            Space was colonized thousand years ago. All planets in the galaxy are controlled by mighty states. However, for your loyalty you can get the whole planet under control as feudal allotment. 
            Planets require you to mine valuable void crystals and provide tournaments.
            </p>
        </div>
    </section>
  )
}
