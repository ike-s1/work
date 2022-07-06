import React from 'react';
import '../../scss/components/battlemech.scss';

export default function Battlemech() {
  return (
<section className="battlemech">
    <h1 className="battlemech__title title-purpl">
    ANCIENT BATLEMECHS
    </h1>
    <div className="battlemech__content">
      <div className="battlemech__left"/>
      <div className="battlemech__right">
      <p>
            These battle machines were created thousand years ago using Void Gods technologies. 
        <br/><br/>It's impossible to recreate such machinery that’s why they are enormously expensive and their number is limited. 
        <br/><br/>Battlemech can be destroyed only by other battlemech. 
        <br/><br/>You will manage light, medium, heavy and extra rare behemoths – superheavy battlemechs.
    </p>
      </div>
    </div>
</section>
  )
}
