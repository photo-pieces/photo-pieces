import React from 'react';

import "../styles/hamburger.scss";

export default props => (
  <div {...props}>
    <label className="hamburger">
      <span className="hamburger-line first" />
      <span className="hamburger-line second" />
      <span className="hamburger-line third" />
    </label>
  </div>
);