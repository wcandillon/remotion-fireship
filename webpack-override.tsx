import type { WebpackOverrideFn } from "@remotion/cli/config";

export const webpackOverride: WebpackOverrideFn = (config) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "react-native$": "react-native-web",
      },
    },
  };
};
