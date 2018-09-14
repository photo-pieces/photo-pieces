import React from 'react';

import "../styles/switch.css";

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