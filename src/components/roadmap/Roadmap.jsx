import React from 'react';
import '../../scss/components/roadmap.scss';
import Stage from './Stage';

export default function Roadmap() {
  return (
    <section className="roadmap">
        <h1 className="roadmap__title title-gold">
        ROADMAP
        </h1>
        <div className="roadmap__stages">
        <Stage
        list={['Playable version', 'Basic PVP', 'Launch of gaming NFT marketplace', 'Overall rating of the players', 'Pilots logic']}
        />
        </div>
    </section>
  )
}
