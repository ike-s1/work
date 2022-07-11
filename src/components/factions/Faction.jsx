import React, { useState } from 'react'

export default function Faction({id, title, text, color}) {
    const [isMore, setIsMore] = useState(false);

   
  return (
    <div 
    className={ id % 2 !== 0 ? 'faction': 'faction faction-right'}
    style={ { background: `url(/images/factions/faction${id}Bg.png)   0 0 / cover no-repeat`}}
    >
         <div className="faction__img">
                    <img src={`/images/factions/faction${id}.png`} alt="faction" />
           </div>
        <div className="faction__content">
                    <div className="faction__info">
                        <h2 
                        className="faction__title"
                       style={{color: color}}
                        >{title}</h2>
                        <p className="faction__desc">
                        {
                            text
                        } { isMore 
                        ?`But this supercomplex started to malfunction and nobody knows how to fix it.Now they have a permanent war against Last Romans to get ancient technologies and new power - The Onrush aroused great interest from the AI prophet.`:'...'}
                        </p>
                        <button className='faction__btn more' onClick={() => setIsMore(!isMore)} >
                                 <img src={isMore ?`/icons/collapseUp.svg`: `/icons/collapseDown.svg`} alt="btn" />
                        </button>
                    </div>
           </div>
    </div>
  )
}
