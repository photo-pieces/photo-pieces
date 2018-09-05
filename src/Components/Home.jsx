import React from 'react';

import "../styles/home.css";

export default props => (
  <div className="home">
    <div className="logo shape1">
      <div className="shape2" />
      <div className="shape2" />
      <div className="shape2" />
      <div className="shape2 shape3" />
    </div>
    <button
      className="btn"
      onClick={e => {
        props.history.push("/new-game");
      }}
    >
      <div>Play</div>
    </button>
  </div>
);