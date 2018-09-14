import React from "react";

import "../styles/level.scss";
export default function Level({ value }) {
  return (
    <div className="level">
      <span>{new Array(value).fill("🏅").join("")}</span>
    </div>
  );
}
