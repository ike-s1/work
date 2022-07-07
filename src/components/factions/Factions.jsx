import React, { useState } from 'react';
import '../../scss/components/factions.scss';

export default function Factions() {
    const [isMore, setIsMore] = useState(false);

  return (
    <section className="factions">
        <h1 className="factions__title title-gold">
            void gods factions
        </h1>
        <div className="factions__content">
            <div className="factionOne">
                    <div className="factionOne__img">
                        <img src="/images/factions/faction1.png" alt="faction" />
                    </div>
                    <div className="factionOne__content">
                        <div className="factionOne__info">
                            <h2 className="factionOne__title">
                                samogitian kingdom
                            </h2>
                            <p className="factionOne__desc">
                            Is a confederation of the most diverse peoples combined around one person.
                            The GrandMaster. The oldest human in the galaxy. He was on
                            Earth before it disappeared. And He knows what will be with his soul after death... 
                            </p>
                            <button className="factionOne__btn">
                                <img src="/images/factions/collapse.png" alt="btn" />
                            </button>
                

                        </div>
                    </div>
            </div>
            <div className="factionTwo">
                <div className="factionTwo__img">
                    <img src="/images/factions/faction2.png" alt="faction" />
                </div>
                <div className="factionTwo__content">
                    <div className="factionTwo__info">
                        <h2 className="factionTwo__title">Caliphate</h2>
                        <p className="factionTwo__desc">
                        The youngest galaxy state. Based on the cult of science and cognition.
                        The Caliphate is managed by artificial intelligence of digitized
                        consciousness of their prophet { isMore ?'test test test test test test test':'...'}
                        </p>
                        <button className={!isMore ? 'factionTwo__btn' : 'factionTwo__btn factionTwo__btn-active'} onClick={() => setIsMore(!isMore)} >
                                <img src="/images/factions/collapse.png" alt="btn" />
                        </button>
                    </div>
                </div>

            </div>
            <div className="factionThree">
            </div>
            <div className="factionFour">
                
            </div>
            <div className="factionFive">
                
            </div>
            <div className="factionSix">
                
            </div>
        </div>
    </section>
  )
}
