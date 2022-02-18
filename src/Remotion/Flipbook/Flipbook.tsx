import { Background } from "../components/Background";
import { Canvas } from "../components/Canvas";

import { Cube, CUBES } from "./Cube";

export const Flipbook = () => {
  return (
    <div>
      <Canvas>
        <Background />
        {new Array(CUBES).fill(0).map((_, index) => (
          <Cube key={index} index={index} />
        ))}
      </Canvas>
    </div>
  );
};
