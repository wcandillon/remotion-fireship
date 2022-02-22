import React from "react";
import {
  AbsoluteFill,
  interpolate,
  staticFile,
  useCurrentFrame,
  Video,
} from "remotion";

export const DevTools: React.FC = () => {
  const frame = useCurrentFrame();
  const y = interpolate(frame, [0, 90], [-100, 300]);
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <Video
        src={staticFile("videos/with-javascript-short.mp4")}
        style={{
          transform: "scale(3) translateY(" + y + "px)",
        }}
      />
    </AbsoluteFill>
  );
};
