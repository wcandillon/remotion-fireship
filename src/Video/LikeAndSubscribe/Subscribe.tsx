import React from "react";

import { BG_COLOR } from "../helpers/colors";

export const Subscribe: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: BG_COLOR,
        borderRadius: 40,
        paddingTop: 55,
        paddingBottom: 55,
        paddingLeft: 70,
        paddingRight: 70,
        fontFamily: "Helvetica",
        fontWeight: "bold",
        marginLeft: 100,
      }}
    >
      SUBSCRIBE
    </div>
  );
};
