import type { FC } from "react";
import { interpolate, spring, useVideoConfig } from "remotion";
import styled from "styled-components";

import { BG_COLOR2 } from "../helpers/colors";
import { getFont } from "../helpers/load-font";

import { Arc } from "./Arc";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ZIndex1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Text = styled.span`
  font-family: Cubano;
  font-size: 180px;
  font-weight: 700;
`;

getFont();

export const Intro: FC<{ frame: number }> = ({ frame }) => {
  const { fps, width, height } = useVideoConfig();
  const scaleProgress = spring({
    fps,
    frame: frame,
    config: {
      mass: 10,
      damping: 200,
    },
  });
  const scale = interpolate(scaleProgress, [0, 1], [2, 1.5]);
  const spring1 = spring({
    fps,
    frame: frame,
    config: {
      stiffness: 100,
      damping: 200,
    },
  });
  const spring2 = spring({
    fps,
    frame: frame - 10,
    config: {
      stiffness: 100,
      damping: 200,
    },
  });
  const offset1 = interpolate(spring1, [0, 1], [1080, 0]);
  const offset2 = interpolate(spring2, [0, 1], [1080, 0]);

  const text = (
    <>
      <div style={{ transform: `translateY(${offset1}px)` }}>
        <Text>This </Text>
        <Text>video </Text>
        <Text>is</Text>
      </div>
      <div style={{ transform: `translateY(${offset2}px)` }}>
        <Text>made </Text>
        <Text>with </Text>
        <Text>React</Text>
      </div>
    </>
  );

  const arcs = (
    <>
      <Arc rotation={0 + 30} frame={frame} />
      <Arc rotation={120 + 30} frame={frame - 15} />
      <Arc rotation={240 + 30} frame={frame - 30} />
    </>
  );

  const opacity = 1;

  return (
    <Container
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: BG_COLOR2,
        color: "white",
      }}
    >
      <svg
        style={{
          width,
          height,
          position: "absolute",
          zIndex: 4,
        }}
      >
        <defs>
          <linearGradient id="lg">
            <stop stopColor="#326cb8" offset="0" />
            <stop stopColor="#2fa8b1" offset="1" />
          </linearGradient>
          <mask id="mask">{arcs}</mask>
        </defs>
        {arcs}
        <g
          style={{
            width,
            height,
            position: "absolute",
          }}
        >
          <foreignObject
            style={{
              width,
              height,
              position: "absolute",
            }}
          >
            <ZIndex1 style={{ color: "white", fontFamily: "Cubano" }}>
              {text}
            </ZIndex1>
          </foreignObject>
        </g>
      </svg>
    </Container>
  );
};
