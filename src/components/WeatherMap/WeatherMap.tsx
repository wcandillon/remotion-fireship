import type { ReactNode } from "react";
import React from "react";
import { View, StyleSheet } from "react-native";
import { AbsoluteFill, Series } from "remotion";

import { CANVAS } from "../../Video/components/Canvas";
import { Code } from "../../Video/components/Code";
import { BG_COLOR2 } from "../../Video/helpers/colors";

import { CloudyMap } from "./CloudyMap";
import { RainMap } from "./RainMap";
import { ThunderstormMap } from "./ThunderstormMap";

const { center } = CANVAS;

interface ContainerProps {
  children: ReactNode | ReactNode[];
}

const Container = ({ children }: ContainerProps) => {
  const [c1, c2] = React.Children.toArray(children);
  return (
    <>
      <AbsoluteFill
        style={{
          width: center.x,
          justifyContent: "center",
          alignItems: "center",
          left: -300,
        }}
      >
        <View
          style={{
            width: 1080,
            height: 1920,
            backgroundColor: "#13001e",
            overflow: "hidden",
          }}
        >
          {c1}
        </View>
      </AbsoluteFill>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          left: center.x - 300,
          width: center.x,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {c2}
      </View>
    </>
  );
};

export const WeatherMap: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BG_COLOR2 }}>
      <Series>
        <Series.Sequence durationInFrames={60}>
          <Container>
            <RainMap />
            <Code
              minWidth={1800}
              fontSize={80}
              source={`const Rain = () => {
  return (
    <AbsoluteFill>
      {new Array(300)
        .fill(true)
        .map((_, i) => (
          <RainDrop
            x={random(\`x-$\{i}\`)}
            delay={random(\`d-$\{i}\`)}
            size={random(\`s-$\{i}\`)}
          />
        ))}
    </AbsoluteFill>
  );
};`}
            />
          </Container>
        </Series.Sequence>
        <Series.Sequence durationInFrames={60}>
          <Container>
            <CloudyMap />
            <Code
              minWidth={1800}
              fontSize={80}
              source={`const Clouds = () => {
  return (
    <AbsoluteFill>
      <Cloud delay={0} x={700} y={650} />
      <Cloud delay={3} x={200} y={800} />
      <Cloud delay={6} x={600} y={1000} />
      <Cloud delay={10} x={300} y={1300} />
      <Cloud delay={14} x={750} y={1450} />
    </AbsoluteFill>
  );
};
`}
            />
          </Container>
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <Container>
            <ThunderstormMap />
            <Code
              minWidth={1800}
              fontSize={110}
              source={`const Tornado = () => {
  return (
   <TotalDestruction />
  );
};`}
            />
          </Container>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
