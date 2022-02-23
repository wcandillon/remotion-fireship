import { random, AbsoluteFill } from "remotion";
import React, { useMemo } from "react";

import { RainDrop } from "./RainDrop";

const dropCount = 300;

export const Rain: React.FC = () => {
  const drops = useMemo(() => {
    return new Array(dropCount).fill(true).map((_, i) => {
      const x = random("x" + i) * 100 + "%";
      const delay = random("delay" + i) * 60;
      const size = random("size" + i) + 0.3;
      return { x, delay, size };
    });
  }, []);
  return (
    <AbsoluteFill>
      {drops.map((d) => {
        return <RainDrop x={d.x} delay={d.delay} size={d.size} />;
      })}
    </AbsoluteFill>
  );
};
