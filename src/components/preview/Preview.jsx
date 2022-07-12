import React from 'react';
import '../../scss/components/preview.scss';
import {  Animator,  batch,Fade, MoveOut} from 'react-scroll-motion';

export default function Preview() {
  return (
         <section className="preview">
            <div className="preview__content">
              <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                <div className="preview__img">
                  <img src="/images/preview/logoBig.png" alt="logo" />
                </div>
                  <h2 className="preview__title">
                    FIRST PLAY AND EARN PROJECT FOR GAMERS
                  </h2>
              </Animator>
            </div>
        </section>  
  );
}
