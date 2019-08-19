import React from "react";

import css from "./styles.scss";
export default function Level({ value }) {
  return (
    <div className={css["level"]}>
      <span>{new Array(value).fill("🏅").join("")}</span>
    </div>
  );
}
