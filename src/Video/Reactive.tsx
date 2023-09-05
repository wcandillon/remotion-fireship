import { Text, View } from "react-native";
import { interpolate, useCurrentFrame } from "remotion";

import { EASE_CLAMP } from "./components/Animations";
import { Code } from "./components/Code";
import { Logo } from "./components/Logo";
import { BG_COLOR2 } from "./helpers/colors";

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
  const states = ["powderblue", "hotpink", "palegreen"];
  return states[Math.round(progress * (states.length - 1))];
};

export const Reactive = () => {
  const frame = useCurrentFrame();
  const world = typeWriter(
    ", World!",
    interpolate(frame, [15, 30], [0, 1], EASE_CLAMP)
  );
  const colorProgress = interpolate(frame, [35, 65], [0, 1], EASE_CLAMP);
  const color = typeString(colorProgress);
  const text = `Hello${world}`;
  const source = `<HelloWorld
  color="${color}"
  text="${text}"
/>`;

  return (
    <View style={{ flex: 1, flexDirection: "row", backgroundColor: BG_COLOR2 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <View style={{ paddingLeft: 120 }}>
          <Code yOffset={0} source={source} minWidth={1800} />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Logo color={color} />
          <Text
            style={{
              fontSize: 200,
              color: color,
              textAlign: "center",
              marginTop: 64,
              fontFamily: "Rubik",
            }}
          >
            {text}
          </Text>
        </View>
      </View>
    </View>
  );
};
