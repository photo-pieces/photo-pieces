import React from "react";

import css from "./styles.scss";

export default ({ checked = false, onChange }) => (
  <label className={css["switch"]}>
    <input
      type="checkbox"
      checked={checked}
      onChange={() => onChange(checked)}
    />
    <span className={css["slider"]} />
  </label>
);
