import React from "react";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper.css";
import { EffectCards, Pagination } from "swiper";
import clsx from "clsx";
import {act} from "react-dom/test-utils";

type Props = {
  children: React.ReactNode[];
  className?: string;
};

function PolaroidCarousel({ className, children }: Props) {
  const [activeIndex, setActiveIndex] = React.useState(0);

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
      onSlideChange={(e) => setActiveIndex(e.realIndex)}
    >
      {children.map((item, index) => (
        <SwiperSlide
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={clsx(
            "relative",
            "after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:pointer-events-none after:bg-black after:transition-colors",
            activeIndex === index ? "after:bg-opacity-0" : "after:bg-opacity-20"
          )}
        >
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

PolaroidCarousel.defaultProps = {
  className: "",
};

export default PolaroidCarousel;
