import React from "react";
import { AbsoluteFill } from "remotion";

import { Code } from "../components/Code";
import { BG_COLOR2 } from "../helpers/colors";

export const Component: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG_COLOR2,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 110,
      }}
    >
      <Code
        yOffset={0}
        minWidth={3200}
        source={`<AbsoluteFill>
  <Map />
  {weather.condition === "sunny" ? (
    <Sun />
  ) : weather.condition === "cloudy" ? (
    <Cloud />
  ) : weather.condition === "rainy" ? (
    <Rain />
  ) : null}
</AbsoluteFill>`}
      />
    </AbsoluteFill>
  );
};
