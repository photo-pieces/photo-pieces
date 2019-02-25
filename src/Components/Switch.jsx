import React from "react";

import "../styles/switch.scss";

export default ({ checked = false, onChange }) => (
  <label className="switch">
    <input
      type="checkbox"
      checked={checked}
      onChange={() => onChange(checked)}
    />
    <span className="slider" />
  </label>
);
