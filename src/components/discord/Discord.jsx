import React from 'react';
import '../../scss/components/discord.scss';

export default function Discord() {
  return (
   <section className="discord">
    <div className="discord__inner">
    <div className="discord__list">
            <button className="discord__list-btn">
                White list
            </button>

    </div>
    <div className="discord__join">
            <p>Join our</p>
            <div className="discord__join-bottom">
              <img src="/icons/discord.png" alt="discord"/>
              <span>Discord</span>
            </div>
           
        </div> 
    </div>
   </section>
  )
}
