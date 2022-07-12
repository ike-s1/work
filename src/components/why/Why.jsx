import React from "react";
import "../../scss/components/why.scss";
import {  Animator, MoveIn, ScrollPage } from 'react-scroll-motion';

export default function Why() {
  return (
          <section className="why">
      <div className="why__container">
        <h1 className="why__title title-gold">
          WHY YOU SHOULD PLAY VOID GODS?
        </h1>
        <div className="why__content">
          <div className="why__content-left">
            <div className="why__reason">
         
                  <div className="lable" />
      
              <p> No crypto wallet needed until money withdraw;</p>
            </div>
            <br />
            <div className="why__reason">
      
                  <div className="lable" />

              <p>
                {" "}
                Storydriven gameplay in epic global plot each player can
                influence. 
                There are no grind or boring activities;
              </p>
            </div>
            <div className="why__reason">
  
                  <div className="lable" />

              <p> Cinematic experience with highquality AAA graphics;</p>
            </div>
          </div>
          <div className="why__content-right">
            <div className="why__reason">
                  <div className="lable" />

              <p>
                {" "}
                Social relationships. Each player has an ability to get vassals;
              </p>
            </div>
            <div className="why__reason">
                  <div className="lable" />
              <p>
                {" "}
                NFT ownership. Each batle robot, pilot, weapon or even planetare your's. You are able to sell it in any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  );
}
