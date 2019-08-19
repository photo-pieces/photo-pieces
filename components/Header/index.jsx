import React from "react";

import css from "./styles.scss";

export default function Header({ maxTime }) {
  const styles = { animationDuration: `${maxTime}s` };
  return (
    <div className={css["header"]}>
      <img className={css["logo"]} src="/static/assets/images/logo.svg" alt="logo" />
      <div>
        <div className={css["progress-bar"]}>
          <div className={css["progress"]} style={styles} />
        </div>
      </div>
    </div>
  );
}
