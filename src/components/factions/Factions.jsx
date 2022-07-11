import React, { useState } from 'react';
import { factions } from '../../data/factionsData';
import '../../scss/components/factions.scss';
import Faction from './Faction';

export default function Factions() {
 

  return (
    <section className="factions" >
        <h1 className="factions__title title-gold">
            void gods factions
        </h1>
        <div className="factions__content">
      {factions.map(({id, title, text, color}) => {
        return <Faction key={id}  id={id} title={title} text={text} color={color}/>
      })}
        </div>
    </section>
  )
}
