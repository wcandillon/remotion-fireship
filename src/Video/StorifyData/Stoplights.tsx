import React from "react";

const stopLight: React.CSSProperties = {
  height: 30,
  width: 30,
  borderRadius: 15,
  backgroundColor: "#fd5652",
  marginLeft: 4,
  marginRight: 4,
};

export const Stoplights: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        marginTop: 10,
        left: 0,
        marginLeft: 100,
      }}
    >
      <div style={stopLight} />
      <div style={{ ...stopLight, backgroundColor: "#fdbd41" }} />
      <div style={{ ...stopLight, backgroundColor: "#33c949" }} />
    </div>
  );
};
