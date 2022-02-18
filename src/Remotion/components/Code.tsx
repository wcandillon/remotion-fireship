import Highlight, { defaultProps } from "prism-react-renderer";

interface CodeProps {
  source: string;
}

export const Code = ({ source }: CodeProps) => {
  return (
    <Highlight {...defaultProps} code={source} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, fontSize: 100 }}>
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
  );
};
