import React from "react";
import { AbsoluteFill, Series } from "remotion";

import { BG_COLOR } from "../helpers/colors";

import { Like } from "./Like";

export const LikeAndSubscribe: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BG_COLOR }}>
      <Series>
        <Series.Sequence durationInFrames={100}>
          <Like />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
