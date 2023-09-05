import React from "react";

export const FakeDevTools: React.FC<{
  enabled: boolean;
  clName: string;
  width: number;
  height: number;
  children: React.ReactNode;
}> = ({ children, enabled, clName, width, height }) => {
  if (!enabled) {
    return <>{children}</>;
  }
  return (
    <span
      style={{
        display: "inline-block",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: 60,
          marginTop: -60,
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <span
          style={{
            color: "#881280",
            fontSize: 35,
            fontFamily: "Helvetica",
            fontWeight: "bold",
          }}
        >
          span
          <span
            style={{
              color: "blue",
            }}
          >
            .{clName}
          </span>
        </span>
        <span
          style={{
            color: "gray",
            fontSize: 30,
            marginLeft: 20,
            fontFamily: "Helvetica",
          }}
        >
          {width}×{height}
        </span>
      </div>
      <span
        style={{
          display: "inline-block",
          whiteSpace: "pre",
          backgroundColor: "rgb(172, 207, 246, 0.8)",
        }}
      >
        {children}
      </span>
    </span>
  );
};
