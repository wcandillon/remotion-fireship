import { useCurrentFrame, interpolate } from "remotion";

import { Background } from "../components/Background";
import { Canvas } from "../components/Canvas";
import { EASE_CLAMP } from "../components/Animations";

import { Page, PAGES } from "./Page";

const duration = 5;

export const Flipbook = () => {
  const frame = useCurrentFrame();
  const overlay = interpolate(
    frame,
    [PAGES * duration + 75, PAGES * duration + 90],
    [0, 1],
    EASE_CLAMP
  );
  const offset = interpolate(
    frame,
    [PAGES * duration + 90, PAGES * duration + 130],
    [0, 4],
    EASE_CLAMP
  );
  return (
    <div>
      <Canvas>
        <Background />
        {new Array(PAGES).fill(0).map((_, index) => (
          <g
            opacity={interpolate(
              frame,
              [index * duration, (index + 1) * duration],
              [0, 1],
              EASE_CLAMP
            )}
          >
            <Page key={index} index={index} overlay={overlay} offset={offset} />
          </g>
        ))}
      </Canvas>
    </div>
  );
};
