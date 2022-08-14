import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper.css";
import { EffectCards, Pagination } from "swiper";

type Props = {
  children: React.ReactNode[];
  className?: string;
};

function PolaroidCarousel({ className, children }: Props) {
  return (
    <Swiper
      effect="cards"
      modules={[EffectCards, Pagination]}
      className={className}
      grabCursor
      pagination={{
        enabled: children.length > 1,
        clickable: true,
      }}
      cardsEffect={{
        slideShadows: false,
      }}
    >
      {children.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}

PolaroidCarousel.defaultProps = {
  className: "",
};

export default PolaroidCarousel;
