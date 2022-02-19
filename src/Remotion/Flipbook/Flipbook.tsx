import { useCurrentFrame, interpolate } from "remotion";

import { Canvas } from "../components/Canvas";
import { EASE_CLAMP } from "../components/Animations";

import { Page, PAGES } from "./Page";

const duration = 5;

export const Flipbook = () => {
  const frame = useCurrentFrame();
  const overlayStart = PAGES * duration + 75;
  const overlay = interpolate(
    frame,
    [overlayStart, overlayStart + 15],
    [0, 1],
    EASE_CLAMP
  );
  const offset = interpolate(
    frame,
    [PAGES * duration + 90, PAGES * duration + 150],
    [0, 4],
    EASE_CLAMP
  );
  return (
    <div>
      <Canvas>
        {new Array(PAGES).fill(0).map((_, index) => (
          <g
            opacity={interpolate(
              frame,
              [index * duration, (index + 1) * duration],
              [0, 1],
              EASE_CLAMP
            )}
          >
            <Page
              key={index}
              index={index}
              overlay={overlay}
              offset={offset}
              frame={overlay < 1 ? index : index + frame - overlayStart - 15}
            />
          </g>
        ))}
      </Canvas>
    </div>
  );
};
