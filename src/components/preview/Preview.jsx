import React from 'react';
import '../../scss/components/preview.scss';
import {  Animator, Fade , MoveOut, ScrollPage} from 'react-scroll-motion';

export default function Preview() {
  return (
         <section className="preview">
            <div className="preview__content">
              <div className="preview__img">
                <img src="/images/preview/logoBig.png" alt="logo" />
              </div>
                <h2 className="preview__title">
                  FIRST PLAY AND EARN PROJECT FOR GAMERS
                </h2>
            </div>
        </section>  
  );
}
