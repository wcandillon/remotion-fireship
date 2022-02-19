import { Text, View } from "react-native";
import { Img, staticFile } from "remotion";

import { mix } from "./components/Animations";

const LOGO_WIDTH = 800;
const LOGO_HEIGHT = 800;

interface RemotionLogoProps {
  progress: number;
}

export const RemotionLogo = ({ progress }: RemotionLogoProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        opacity: progress,
        transform: [{ translateY: mix(progress, -200, 0) }],
      }}
    >
      <Img
        src={staticFile("/images/logo.png")}
        style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
      />
      <Text
        style={{
          marginLeft: 128,
          fontFamily: "SF Pro",
          color: "black",
          fontSize: 400,
          fontWeight: "700",
        }}
      >
        Remotion
      </Text>
    </View>
  );
};
