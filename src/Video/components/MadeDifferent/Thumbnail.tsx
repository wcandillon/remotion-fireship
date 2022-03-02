import React from "react";
import {
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const videoThumbnails = [
  staticFile("images/insert-thumbnail.jpg"),
  "https://i.ytimg.com/vi/1L2hrG-7i2Y/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjOlJs87fcIbEotaLNjpELsY5cDg",
  "https://i.ytimg.com/vi/vAoB4VbhRzM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsrbHHkaBWer5vm6Tvt_6s8zPazA",
  "https://i.ytimg.com/vi/ouncVBiye_M/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeK3IupDkntLvbunqR8dOFCP1-LA",
  "https://i.ytimg.com/vi/jUuqBZwwkQw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARm9osCIWuhZKNPqatdno8SpcrtA",
  "https://i.ytimg.com/vi/KPyeJ5J2a7A/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGhR97L7ibCrteG2sfaVOXjOulDw",
  "https://i.ytimg.com/vi/NtfbWkxJTHw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIp55raP-2Srxf4GLH__3iADw1OA",
  "https://i.ytimg.com/vi/MNeX4EGtR5Y/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrhlwh-HQXYY2MbgB7VxYXlw-tNw",
  "https://i.ytimg.com/vi/MBqS1kYzwTc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-ksJhCGg_ZPKaLA3bcaX9w-WrUg",
  "https://i.ytimg.com/vi/V7LEihbOv3Y/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYVtBAcWS-5rfCrltnZYk15ZUb6Q",
  "https://i.ytimg.com/vi/bJUl3OAIT0k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwNiP625zOc3I9SIaKab5Jana_0w",
  "https://i.ytimg.com/vi/UYm0kfnRTJk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA41Wt1EB16XPj1c7isa06Nae9Xtw",
  "https://i.ytimg.com/vi/_oHByo8tiEY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUzBve5tXJem8jiOqO8sIoucLgOg",
  "https://i.ytimg.com/vi/rLRIB6AF2Dg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9BopTtJMRs2oe0vA2V87sOtq91w",
  "https://i.ytimg.com/vi/BrcugNqRwUs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9VI9vH64CzXZzDOa9vvoymlchFg",
  "https://i.ytimg.com/vi/Xg9ihH15Uto/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTw84Q2y9kUS2J_juacUDoAQpeTg",
];

export const Thumbnail: React.FC<{
  src: string;
  style: React.CSSProperties;
}> = ({ src, style }) => {
  const isTheDifferentVideo = videoThumbnails[0] === src;
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(
    frame,
    [30, 40],
    [1, isTheDifferentVideo ? 1 : 0.1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const boxShadowProgress = spring({
    fps,
    frame: frame - 35,
    config: {
      damping: 200,
    },
  });
  const boxShadowSpread = interpolate(boxShadowProgress, [0, 1], [0, 80], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Img
      style={{
        width: 550,
        marginLeft: 40,
        marginRight: 40,
        opacity,
        boxShadow: isTheDifferentVideo
          ? "0 0 " + boxShadowSpread + "px gold"
          : undefined,
        ...style,
      }}
      src={src}
    />
  );
};
