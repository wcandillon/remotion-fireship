import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export const RemotionWebsite: React.FC = () => {
  const frame = useCurrentFrame();
  const y = interpolate(frame, [0, 90], [0, -1800]);
  return (
    <AbsoluteFill>
      <Img
        src={staticFile("images/remotion-website.png")}
        style={{
          transform: "translateY(" + y + "px)",
        }}
      />
    </AbsoluteFill>
  );
};
