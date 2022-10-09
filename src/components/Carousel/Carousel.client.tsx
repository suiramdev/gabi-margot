import React from "react";
import {animated, useSprings} from "react-spring";

type Props = {
  children: React.ReactNode[];
};

function Carousel({children}: Props) {
  const [styles, api] = useSprings(children.length, (i) => ({
    x: 0,
    rotate: i % 2 ? 4 : -4,
    zIndex: i,
    scale: 1
  }));

  const next = (index: number) => {
    api.start(i => ({
      to: async (next) => {
        if (index === i) {
          await next({scale: 1.1});
          await next({x: 100, rotate: -styles[i].rotate.get()});
        }
        await next({zIndex: (styles[i].zIndex.get() + 1) % children.length})
        if (index === i) {
          await next({scale: 1});
          await next({x: 0});
        }
      },
      config: {duration: 250}
    }));
  };

  return (
    <div className="w-full h-full relative">
      {children.map((node, index) => (
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <animated.div
            style={styles[index]}
            onClick={() => next(index)}
            key={index}
          >
            {node}
          </animated.div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;