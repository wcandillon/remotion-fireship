import React from "react";
import { AbsoluteFill } from "remotion";

import { Cloud } from "./Cloud";

export const Clouds: React.FC = () => {
  return (
    <AbsoluteFill>
      <Cloud
        delay={0}
        style={{
          top: 650,
          left: 700,
        }}
      />
      <Cloud
        delay={3}
        style={{
          top: 800,
          left: 200,
        }}
      />
      <Cloud
        delay={6}
        style={{
          top: 1000,
          left: 600,
        }}
      />
      <Cloud
        delay={10}
        style={{
          top: 1300,
          left: 300,
        }}
      />
      <Cloud
        delay={14}
        style={{
          top: 1450,
          left: 750,
        }}
      />
    </AbsoluteFill>
  );
};
