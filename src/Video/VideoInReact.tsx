import { View } from "react-native";
import { useCurrentFrame } from "remotion";

import { Code } from "./components/Code";
import { BG_COLOR2 } from "./helpers/colors";

export const VideoInReact = () => {
  const frame = useCurrentFrame();
  const source = `const MyVideo = () => {
  const frame = useCurrentFrame(); // ${frame}

  // TODO: Draw something
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
      <Code minWidth={3200} source={source} />
    </View>
  );
};
