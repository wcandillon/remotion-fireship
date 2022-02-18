import { Code } from "./components/Code";

const source = `
<HelloWorld
  color="cyan"
  text="Hello, World!"
/>
`;

export const Reactive = () => {
  return <Code source={source} />;
};
