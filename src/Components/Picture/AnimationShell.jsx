import React from "react";
export default function AnimationShell({ style }) {
  return (
    <svg className="piece-svg" style={style} height="100" viewBox="0 0 200 200">
      <polygon
        className="path"
        points="0 0, 100 0, 100 0, 200 0, 200 200, 0 200, 0 100, 0 100, 0 100"
        stroke="#fff"
        fill="transparent"
        strokeWidth="10"
      />
    </svg>
  );
}
