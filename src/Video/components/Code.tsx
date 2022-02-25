import Highlight, { defaultProps } from "prism-react-renderer";
import { View } from "react-native";

import { theme } from "./oneDark";

const size = 75;

interface CircleProps {
  color: string;
}

const Circle = ({ color }: CircleProps) => (
  <View
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      borderRadius: size / 2,
      marginRight: 50,
    }}
  />
);

interface CodeProps {
  source: string;
  fontSize: number;
  minWidth: number;
  yOffset: number;
}

export const Code = ({ source, fontSize, minWidth, yOffset }: CodeProps) => {
  return (
    <div
      style={{
        transform: `translateY(${yOffset}px)`,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          padding: 50,
          backgroundColor: theme.plain.backgroundColor,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <Circle color="#FF5E57" />
        <Circle color="#FFBC30" />
        <Circle color="#29C93F" />
      </View>
      <div
        style={{
          padding: 50,
          paddingTop: 0,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: theme.plain.backgroundColor,
          minWidth,
          display: "flex",
        }}
      >
        <Highlight {...defaultProps} code={source} language="jsx" theme={theme}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                fontSize,
                fontFamily: "SF Mono, Menlo, Monaco, 'Courier New', monospace",
              }}
            >
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

Code.defaultProps = {
  fontSize: 120,
};
