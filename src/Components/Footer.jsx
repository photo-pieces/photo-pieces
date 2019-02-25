import React from "react";

import "../styles/footer.scss";
import PackageJson from "./../../package.json";

export default () => (
  <div className="footer-text">
    We made
    <a
      className="footer-link"
      href="https://photo-pieces.now.sh/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Photo Pieces
    </a>
    for you crazy millennials.
    <br />
    Talk to us:
    <a
      className="footer-link"
      href="https://twitter.com/kuldeepkeshwar"
      target="_blank"
      rel="noopener noreferrer"
    >
      @kuldeepkeshwar
    </a>
    <a
      className="footer-link"
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
