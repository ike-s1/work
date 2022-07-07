import React from "react";
import "../../scss/components/weapons.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


export default function Weapons() {
  return (
    <section className="weapons">
      <h1 className="weapons__title title-purpl">DEADLY WEAPONS</h1>
      <div className="weapons__slider">
        <Swiper
           modules={[Pagination]}
           slidesPerView={1}
           pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="weapon__item">
              <img src="/images/weapons/weapon1.png" alt="weapon" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="weapon__item">
              <img src="/images/weapons/weapon2.png" alt="weapon" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="weapon__item">
              <img src="/images/weapons/weapon3.png" alt="weapon" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="weapons__text">
            <p>
            Space was colonized thousand years ago. All planets in the galaxy are
          controlled by mighty states. However, for your loyalty you can get the
          whole planet under control as feudal allotment.<br/> Planets require you to
          mine valuable void crystals and provide tournaments.
            </p>
        </div>
      </div>
    </section>
  );
}
