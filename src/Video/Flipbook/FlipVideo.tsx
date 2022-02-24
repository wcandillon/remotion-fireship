import React, { useMemo } from "react";
import {
  AbsoluteFill,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from "remotion";

import { BG_COLOR } from "../helpers/colors";
import { getFont } from "../helpers/load-font";

const flipbook = staticFile("/videos/flipbook.mov");

getFont();

export const FlipVideo: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const scale = spring({
    fps,
    frame: frame - 8,
    config: {
      damping: 200,
    },
  });
  const label = useMemo(() => {
    if (frame < 24) {
      return "Video";
    }
    if (frame < 40) {
      return "video =";
    }
    return "video = image(time)";
  }, [frame]);

  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <Video src={flipbook} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            fontFamily: "Cubano",
            fontSize: 220,
            padding: 50,
            lineHeight: 1,
            borderRadius: 40,
            color: "white",
            background: BG_COLOR,
            transform: `scale(${scale})`,
          }}
        >
          {label}{" "}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
