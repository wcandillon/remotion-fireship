import type { OnMount } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import { Text, View } from "react-native";
import { interpolate, useCurrentFrame } from "remotion";

import { EASE_CLAMP } from "./components/Animations";
import { CANVAS } from "./components/Canvas";
import { Logo } from "./components/Logo";

//const theme = require("./one-dark.json");

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

const { center } = CANVAS;
const PADDING = 200;
const height = 800;
const width = center.x - PADDING;

export const Reactive = () => {
  const frame = useCurrentFrame();
  const onMount: OnMount = (editor) => {
    editor.updateOptions({ fontSize: 128 });
    //monaco.editor.defineTheme("OneDark", theme);
    //monaco.editor.setTheme("OneDark");
  };

  const world = typeWriter(
    ", World!",
    interpolate(frame, [0, 100], [0, 1], EASE_CLAMP)
  );
  const color = "cyan";
  const source = `<HelloWorld
  color="${color}"
  text="Hello${world}"
/>`;
  return (
    <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#282C34" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ height, width }}>
          <Editor
            theme="vs-dark"
            height={height}
            defaultLanguage="javascript"
            defaultValue={source}
            onMount={onMount}
          />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Logo color="cyan" />
          <Text
            style={{ fontSize: 200, color, textAlign: "center", marginTop: 64 }}
          >
            Hello, World!
          </Text>
        </View>
      </View>
    </View>
  );
};
