import React from "react";
import { useCurrentFrame } from "remotion";

import { DataDriven } from ".";

export const ReverseDataDriven: React.FC = () => {
  const frame = useCurrentFrame();
  return <DataDriven frame={150 - frame} />;
};
