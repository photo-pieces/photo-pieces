import React from "react";

import "../styles/level.css";
export default function Level({ value }) {
  return (
    <div className="level">
      <span>{new Array(value).fill("🏅").join("")}</span>
    </div>
  );
}
