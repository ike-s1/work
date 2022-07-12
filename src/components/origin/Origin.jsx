import React from 'react';
import '../../scss/components/origin.scss';

export default function Origin() {
  return (
        <section className="origin">
                <h1 className="origin__title title-gold">
                void goods origin
                </h1>
                <div className="origin__content">
                    <div className="itemOne">                        
                       <div className="itemOne__text">
                       <p>Thousands of years ago, humanity conquered the galaxy.
                            But over time, it has fallen into the dark ages where space travel
                            and cutting edge technology are perceived as household magic,
                            and various extraterrestrial life forms have learned to live in
                            the shadow of humans like creatures from ancient myths.</p>
                        </div>  
                        <div className="itemOne__img">
                            <img src="/images/origin/itemOneImg.png" alt="map" />
                        </div>                     
                    </div>
                    
                    <div className="itemTwo">
                            <div className="itemTwo__lable">
                            <div className="itemTwo__lable-text">
                                <p>
                                Earth was lost as a result of constant attacks by space barbarian kingdoms,
                                so humanity lost its center and united around monarchical state formations such as
                                Kievan Rus, Byzantium, the Varangian principalities, the Caliphate, etc.
                                </p>
                            </div>
                            </div>

                    </div>
                    <div className="itemThree">
                            <div className="itemThree__text">
                                <p>
                                Wars and dynastic intrigues are constantly taking place between space monarchies.
                                Also, it is no secret to anyone the existence of the Void Gods, who are older
                                than the known universe. The final link of the universe is the appearance of reconnaissance
                                fleets of an unknown civilization, which does not come into contact,
                                but by all indications prepares the ground for the invasion of a giant armada.
                                </p>

                            </div>
                            <div className="itemThree__img">
                                <img src="/images/origin/itemThreeImg.png" alt="heros" />
                            </div>
                    </div>
                    <div className="itemFour">
                            <div className="itemFour__lable ">
                            <div className="itemFour__lable-text">
                                <p>
                                At this terrible time, you will take on the role of a mercenary, the commander of gigantic
                                walking war machines detachments to change the fate of mankind as you wish.
                                </p>
                            </div>
                            </div>

                    </div>
                </div>
        </section>
  )
}
