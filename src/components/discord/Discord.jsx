import React from 'react';
import '../../scss/components/discord.scss';

export default function Discord() {
  return (
   <section className="discord">
    <div className="discord__list">
            <button className="discord__list-btn">
                White list
            </button>

    </div>
        <div className="discord__join">
            <img src="/images/discord/join.png" alt="join" />
            {/* <p className='discord__join-top'>join our</p>
            <div className="discord__join-bottom">
                <img src="/icons/discord.png" alt="discord" />
                <p >discord</p>
            </div> */}
        </div>
   </section>
  )
}
