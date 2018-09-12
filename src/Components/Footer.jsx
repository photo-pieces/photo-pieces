import React from 'react';

import "../styles/footer.css";
export default () => (
  <div className="footer-text">
    We made{" "}
    <a
      className="footer-link"
      href="https://photo-pieces.netlify.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Photo pieces
    </a>{" "}
    for you crazy millennials.
    <br />
    Talk to us:
    <a
      className="footer-link"
      href="https://twitter.com/kuldeepkeshwar"
      target="_blank"
      rel="noopener noreferrer"
    >
      @kuldeepkeshwar{" "}
    </a>
    <a
      className="footer-link"
      href="https://twitter.com/ntshtyagi"
      target="_blank"
      rel="noopener noreferrer"
    >
      @ntshtyagi{" "}
    </a>
  </div>
);