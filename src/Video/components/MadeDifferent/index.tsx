import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { BG_COLOR2 } from "../../helpers/colors";

import { Thumbnail, videoThumbnails } from "./Thumbnail";
import { YouTubeHeader } from "./YouTubeHeader";

const ThumbnailRow: React.FC<{
  row: number;
}> = ({ row }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const up = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 30,
      }}
    >
      {videoThumbnails.slice(row * 4, (row + 1) * 4).map((item) => {
        return (
          <Thumbnail
            style={{
              transform: `translateY(${interpolate(up, [0, 1], [2000, 0])}px)`,
            }}
            src={item}
          />
        );
      })}
    </div>
  );
};

const MadeDifferentInner: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG_COLOR2,
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <YouTubeHeader />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ThumbnailRow row={0} />
      <ThumbnailRow row={1} />
      <ThumbnailRow row={2} />
      <ThumbnailRow row={3} />
    </AbsoluteFill>
  );
};

export const MadeDifferent: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const zoomProgress = spring({
    fps,
    frame: frame - 20,
    config: {
      damping: 200,
    },
  });
  const scale = interpolate(zoomProgress, [0, 1], [1, 3]);
  const translateX = interpolate(zoomProgress, [0, 1], [0, 945], {
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(zoomProgress, [0, 1], [0, 328], {
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill
      style={{
        transform: `scale(${scale}) translateX(${translateX}px) translateY(${translateY}px)`,
      }}
    >
      <MadeDifferentInner />
    </AbsoluteFill>
  );
};
