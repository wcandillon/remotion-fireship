import { View } from "react-native";
import { useCurrentFrame } from "remotion";

import { Code } from "./components/Code";
import { BG_COLOR2 } from "./helpers/colors";

export const VideoInReact = () => {
  const frame = useCurrentFrame();
  const source = `const MyVideo = () => {
  const frame = useCurrentFrame(); // ${1000 + frame}
  return <VideoContent />;
}`;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BG_COLOR2,
      }}
    >
      <Code source={source} />
    </View>
  );
};
