import React from "react";
import "../styles/score-board.css";

export default ({ location, history }) => (
  <div className="score-board">
    <div className="score-card">
      <div className="label">Score</div>
      <div className="score">{location.state.score}</div>
      <div className="score">
        {location.state.result === "w" ? "😁🏆🥇💯" : "💔😔"}
      </div>
    </div>
    <div
      className="btn"
      onClick={e => {
        history.replace("/history");
      }}
    >
      <div>History</div>
    </div>
    <div
      className="btn"
      onClick={e => {
        history.replace("/new-game");
      }}
    >
      <div>Play Again</div>
    </div>
  </div>
);
