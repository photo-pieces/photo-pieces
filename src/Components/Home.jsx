import React from 'react';

import "../styles/home.css";

export default (props) => (
  <div className="home">
    <div className="btn" onClick={(e)=>{props.history.push("/new-game");}}>
        <div>Play</div>
    </div>
  </div>
);