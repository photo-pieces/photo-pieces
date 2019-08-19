import React from "react";

import css from "./styles.scss";

export default props => (
    <label className={css["hamburger"]} {...props}>
      <span className={`${css["hamburger-line"]} ${css["first"]}`} />
      <span className={css["hamburger-line"]} />
      <span className={`${css["hamburger-line"]} ${css["third"]}`} />
    </label>
);
