import React from 'react';
import { Autoplay, EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import enQuotes from 'constants/en-quotes.json';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

import './Slider.sass';

export const Slider: React.FC = () => {
  const randomQuoteIndex = Math.floor(Math.random() * (enQuotes.length - 20));
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectCards]}
      className="mySwiper"
    >
      {enQuotes.slice(randomQuoteIndex, randomQuoteIndex + 20).map((quote, index) => (
        <SwiperSlide key={index}>
          <div className="slide">
            <p className="slide__quote">{`"${quote.quote}"`}</p>
            <p className="slide__author">{`- ${quote.author}`}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
