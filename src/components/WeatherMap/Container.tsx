import type { ReactNode } from "react";
import React from "react";
import { View, StyleSheet } from "react-native";
import { AbsoluteFill } from "remotion";

import { CANVAS } from "../../Video/components/Canvas";

const { center } = CANVAS;

interface ContainerProps {
  children: ReactNode | ReactNode[];
}

export const Container = ({ children }: ContainerProps) => {
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
