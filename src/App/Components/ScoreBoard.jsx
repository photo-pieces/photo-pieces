import React from "react";
import "../styles/score-board.scss";
import ReactGA from "./../utils/ga";
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
        ReactGA.event({
          category: "Navigation",
          action: "New Game"
        });
        history.replace("/new-game");
      }}
    >
      <div>Play Again</div>
    </div>
  </div>
);
