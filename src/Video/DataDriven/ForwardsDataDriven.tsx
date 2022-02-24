import React from "react";
import { useCurrentFrame } from "remotion";

import { DataDriven } from ".";

export const ForwardsDataDriven: React.FC = () => {
  const frame = useCurrentFrame();
  return <DataDriven frame={frame} />;
};
