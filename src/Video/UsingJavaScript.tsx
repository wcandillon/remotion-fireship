import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

import { EASE_CLAMP, mix } from "./components/Animations";
import { ThrowOutZoomed } from "./components/ThrowOut/Zoomed";

export const UsingJavaScript = () => {
  const frame = useCurrentFrame();
  const fade = interpolate(frame, [170, 190], [0, 1], EASE_CLAMP);
  return (
    <>
      <AbsoluteFill
        style={{
          opacity: 1 - fade,
          transform: `translateY(${mix(1 - fade, -200, 0)}px)`,
        }}
      >
        <ThrowOutZoomed />
      </AbsoluteFill>
    </>
  );
};
