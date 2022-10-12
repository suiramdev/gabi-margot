import React from "react";
import { animated, useSprings } from "react-spring";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  children: React.ReactNode[];
};

function CardCarousel({ children }: Props) {
  const [active, setActive] = React.useState(children.length);
  const [styles, api] = useSprings(children.length, (i) => {
    return {
      x: 0,
      rotate: i % 2 ? -4 : 4,
      zIndex: children.length - 1 - i,
      scale: 1,
    };
  });

  const nextSlide = () => {
    api.start((i) => ({
      to: async (next) => {
        if (active === i) {
          await next({ scale: 1.1 });
          await next({ x: 100, rotate: -styles[i].rotate.get() });
        }
        await next({ zIndex: (styles[i].zIndex.get() + 1) % children.length });
        if (active === i) {
          await next({ scale: 1 });
          await next({ x: 0, rotate: -styles[i].rotate.get() });
        }
      },
      config: { duration: 250 },
    }));
    setActive((active + 1) % children.length);
  };

  return (
    <div className="flex gap-8">
      <button
        type="button"
        className="text-3xl text-content/50 hover:text-content"
      >
        <FaArrowLeft />
      </button>
      <div className="w-full aspect-square relative">
        <div className="w-[70%] aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {children.map((node, index) => (
            <animated.div
              className="absolute"
              style={styles[index]}
              key={index}
            >
              {node}
            </animated.div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="text-3xl text-content/50 hover:text-content"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default CardCarousel;
