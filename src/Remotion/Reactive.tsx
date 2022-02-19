import { Text, View } from "react-native";
import { interpolate, useCurrentFrame } from "remotion";

import { EASE_CLAMP } from "./components/Animations";
import { CANVAS } from "./components/Canvas";
import { Code } from "./components/Code";
import { Logo } from "./components/Logo";
import { BG_COLOR } from "./helpers/colors";

export const typeWriter = (text: string, progress: number) => {
  const letters = text.split("");
  const step = 1 / letters.length;
  return letters
    .map((letter, i) => {
      const outlinesAt = i * step;
      if (progress < outlinesAt || progress === 0) {
        return null;
      }
      return letter;
    })
    .join("");
};

const typeString = (progress: number) => {
  const delta = 1 / "cyanmagenta".length;
  const states = [
    "cyan",
    "cya",
    "cy",
    "c",
    "",
    "m",
    "ma",
    "mag",
    "mage",
    "magen",
    "magent",
    "magenta",
  ];
  return states[Math.floor(progress / delta)];
};

const validColor = (color: string) => {
  if (color === "magenta") {
    return "deeppink";
  }
  return "#61DAFB";
};

const { center } = CANVAS;
const PADDING = 200;
const height = 800;
const width = center.x - PADDING;

export const Reactive = () => {
  const frame = useCurrentFrame();
  const world = typeWriter(
    ", World!",
    interpolate(frame, [0, 15], [0, 1], EASE_CLAMP)
  );
  const colorProgress = interpolate(frame, [25, 65], [0, 1], EASE_CLAMP);
  const color = typeString(colorProgress);
  const text = `Hello${world}`;
  const source = `<HelloWorld
  color="${color}"
  text="${text}"
/>`;

  return (
    <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#16181D" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ height, width }}>
          <Code source={source} />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Logo color={validColor(color)} />
          <Text
            style={{
              fontSize: 200,
              color: validColor(color),
              textAlign: "center",
              marginTop: 64,
              fontFamily: "Rubik-Medium",
            }}
          >
            {text}
          </Text>
        </View>
      </View>
    </View>
  );
};
