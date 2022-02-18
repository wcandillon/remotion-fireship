import { Text, View, StyleSheet } from "react-native";
import {
  Img,
  staticFile,
  useCurrentFrame,
  interpolate,
  AbsoluteFill,
} from "remotion";

import { BG_COLOR2 } from "./helpers/colors";
import { CANVAS } from "./components/Canvas";
import { EASE_CLAMP, interpolateVector, mix } from "./components/Animations";

const LOGO_WIDTH = 800;
const LOGO_HEIGHT = 800;
const { center } = CANVAS;

export const IntroducingRemotion = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 30], [0, 1], EASE_CLAMP);
  const logoX = mix(progress, 950, 0);
  const titleX = mix(progress, -1050, 0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BG_COLOR2,
        flexDirection: "row",
      }}
    >
      <View style={{ transform: [{ translateX: logoX }] }}>
        <Img
          src={staticFile("/images/logo.png")}
          style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
        />
      </View>
      <Text
        style={{
          transform: [{ translateX: titleX }],
          marginLeft: 128,
          fontFamily:
            "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
          color: "white",
          fontSize: 400,
          fontWeight: "700",
        }}
      >
        Remotion
      </Text>
    </View>
  );
};
