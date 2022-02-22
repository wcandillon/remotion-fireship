import { Text, View, StyleSheet } from "react-native";
import { Img, staticFile, useCurrentFrame, interpolate } from "remotion";

import { BG_COLOR2 } from "./helpers/colors";
import { CANVAS } from "./components/Canvas";
import { EASE_CLAMP, mix } from "./components/Animations";

const LOGO_WIDTH = 800;
const LOGO_HEIGHT = 800;
const TITLE_WIDTH = 1756;
const { center } = CANVAS;
const logoSrcX = center.x - LOGO_WIDTH / 2;
const logoDstX = 574;
const titleSrcX = center.x - TITLE_WIDTH;
const titleDstX = 1510;

export const IntroducingRemotion = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 15], [0, 1], EASE_CLAMP);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BG_COLOR2,
      }}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: "center",
          transform: [{ translateX: mix(progress, titleSrcX, titleDstX) }],
        }}
      >
        <Text
          style={{
            marginLeft: 128,
            fontFamily: "SF Pro",
            color: "white",
            fontSize: 400,
            fontWeight: "700",
          }}
        >
          Remotion
        </Text>
      </View>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: BG_COLOR2,
          width: center.x,
          transform: [{ translateX: mix(progress, 0, -logoDstX) }],
        }}
      />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: "center",
          transform: [{ translateX: mix(progress, logoSrcX, logoDstX) }],
        }}
      >
        <Img
          src={staticFile("/images/logo.png")}
          style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
        />
      </View>
    </View>
  );
};
