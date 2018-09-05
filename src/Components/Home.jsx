import React from 'react';

import "../styles/home.css";

export default (props) => (
  <div className="home">
    <div class="logo shape1">
      <div class="shape2"></div>
      <div class="shape2"></div>
      <div class="shape2"></div>
      <div class="shape2 shape3"></div>
    </div>
    <button className="btn" onClick={(e)=>{props.history.push("/new-game");}}>
      <div>Play</div>
    </button>
  </div>
);