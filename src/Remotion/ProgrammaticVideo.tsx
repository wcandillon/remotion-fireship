import { View } from "react-native";

import { Code } from "./components/Code";
import { BG_COLOR2 } from "./helpers/colors";

export const ProgrammaticVideo = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BG_COLOR2,
      }}
    >
      <Code source="1 + 1" />
    </View>
  );
};
