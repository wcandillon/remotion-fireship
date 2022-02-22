import React from "react";
import { AbsoluteFill, Sequence } from "remotion";

import { JsonData } from "./JsonData";
import { Player } from "./Player";

export const StorifyData: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: "#221d28", width: 1920, height: 1080 }}
    >
      <JsonData />
      <AbsoluteFill
        style={{
          width: "50%",
          left: "50%",
        }}
      >
        <Sequence from={60}>
          <Player />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
