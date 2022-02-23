import type { ReactNode } from "react";
import React from "react";
import { View, StyleSheet } from "react-native";
import { AbsoluteFill, Series } from "remotion";

import { BG_COLOR } from "../../Video/helpers/colors";
import { CANVAS } from "../../Video/components/Canvas";
import { Code } from "../../Video/components/Code";

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
          left: center.x,
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
    <AbsoluteFill style={{ backgroundColor: BG_COLOR }}>
      <Series>
        <Series.Sequence durationInFrames={60}>
          <Container>
            <RainMap />
            <Code
              fontSize={110}
              source={`const Rain = () => {
  return (
   <RainDrops />
  );
};`}
            />
          </Container>
        </Series.Sequence>
        <Series.Sequence durationInFrames={60}>
          <Container>
            <CloudyMap />
            <Code
              fontSize={110}
              source={`const Cloudy = () => {
  return (
   <Clouds />
  );
};`}
            />
          </Container>
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <Container>
            <ThunderstormMap />
            <Code
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
