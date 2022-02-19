import {
  AbsoluteFill,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { EASE_CLAMP, mix } from "./components/Animations";
import { Canvas, CANVAS } from "./components/Canvas";
import { Intro } from "./Intro";
import { RemotionLogo } from "./RemotionLogo";
import { BG_COLOR2 } from "./helpers/colors";

const LOGO_ASPECT = 533.33 / 547;
const LOGO_WIDTH = 800;
const LOGO_HEIGHT = LOGO_WIDTH * LOGO_ASPECT;
const { height, center } = CANVAS;
const x1 = (center.x - LOGO_WIDTH) / 2;
const x2 = x1 + center.x;
const y = (height - LOGO_HEIGHT) / 2;

const startTransitionAt = 50;
const duration = 15;
const stagger = 10;

export const UsingJavaScript = () => {
  const frame = useCurrentFrame();
  const dissolves = interpolate(
    frame,
    [startTransitionAt, startTransitionAt + duration],
    [0, 1],
    EASE_CLAMP
  );
  const offsetY = mix(dissolves, 0, 400);
  const opacity = 1 - dissolves;
  const fade = interpolate(frame, [170, 190], [0, 1], EASE_CLAMP);
  return (
    <>
      <Canvas>
        <filter id="filter">
          <feTurbulence
            type="turbulence"
            baseFrequency={`${mix(dissolves, 0, 0.01)} ${mix(
              dissolves,
              0,
              0.01
            )}`}
            numOctaves="2"
            seed="2"
            stitchTiles="noStitch"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="20"
            xChannelSelector="G"
            yChannelSelector="A"
            result="displacementMap"
          />
          <feGaussianBlur
            in="displacementMap"
            stdDeviation={`0 ${mix(dissolves, 0, 30)}`}
          />
        </filter>
        <rect
          x={0}
          y={0}
          width={CANVAS.width}
          height={CANVAS.height}
          fill="#FBF6EB"
        />
        <image
          filter="url(#filter)"
          href={staticFile("/images/pr1.svg")}
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          x={x1}
          y={y + offsetY}
          opacity={opacity}
        />
        <image
          filter="url(#filter)"
          href={staticFile("/images/ae1.svg")}
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          x={x2}
          y={y + offsetY}
          opacity={opacity}
        />
      </Canvas>
      <AbsoluteFill
        style={{
          opacity: 1 - fade,
          transform: `translateY(${mix(1 - fade, -200, 0)}px)`,
        }}
      >
        <Intro frame={frame - (startTransitionAt + stagger)} />
      </AbsoluteFill>
      <AbsoluteFill>
        <RemotionLogo progress={fade} />
      </AbsoluteFill>
    </>
  );
};
