import React from 'react';
import '../../scss/components/little.scss';



export default function Little() {
  return (
    <section className='little'>
            <div className="little__row">
                <div className="little__item little__item-left active">
                  <img src="/images/little/img2.png" alt="battle" />
                </div>
                <div className="little__item little__item-center">
                  <img src="/images/little/img3.png" alt="battle" />
                </div>
                <div className="little__item little__item-right">
                  <img src="/images/little/img1.png" alt="battle" />
                </div>
            </div>
            <h1 className="little__title title-gold">
            WHAT WILL HELP YOU TO WIN IN BATTLES?
            </h1>
    </section>
  )
}
