import React from "react";
import { AbsoluteFill } from "remotion";

import { Cloud } from "./Cloud";

export const Clouds: React.FC = () => {
  return (
    <AbsoluteFill>
      <Cloud delay={0} x={700} y={650} />
      <Cloud delay={3} x={200} y={800} />
      <Cloud delay={6} x={600} y={1000} />
      <Cloud delay={10} x={300} y={1300} />
      <Cloud delay={14} x={750} y={1450} />
    </AbsoluteFill>
  );
};
