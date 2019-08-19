import React from "react";

import css from "./styles.scss";
import PackageJson from "../../package.json";

export default () => (
  <div className={css["footer-text"]}>
    We made
    <a
      className={css["footer-link"]}
      href="https://github.com/photo-pieces/photo-pieces"
      target="_blank"
      rel="noopener noreferrer"
    >
      Photo Pieces
    </a>
    for you crazy millennials.
    <br />
    Talk to us:
    <a
      className={css["footer-link"]}
      href="https://twitter.com/kuldeepkeshwar"
      target="_blank"
      rel="noopener noreferrer"
    >
      @kuldeepkeshwar
    </a>
    <a
      className={css["footer-link"]}
      href="https://twitter.com/ntshtyagi"
      target="_blank"
      rel="noopener noreferrer"
    >
      @ntshtyagi
    </a>
    <br />
    Version : {PackageJson.version}
  </div>
);
