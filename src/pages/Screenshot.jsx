import React from "react";
import { Button, Link } from "../Components/Buttons";
import "../styles/score-board.scss";
import { GAME_RESULT } from "../utils/constants";
function extractQueryParams(query) {
  return query
    .replace("?", "")
    .split("&")
    .reduce((result, item) => {
      const [key, value] = item.split("=");
      result[key] = value;
      return result;
    }, {});
}
export default ({ location }) => {
  const { stats } = extractQueryParams(location.search);
  const {
    levels = 0,
    result = GAME_RESULT.LOST,
    total = 0,
    lastLevelScore = 0
  } = atob(stats);

  const won = result === GAME_RESULT.WON;
  return (
    <div className="score-board">
      <div className="score-card-container">
        <ScoreCard
          total={total}
          levels={levels}
          lastLevelScore={lastLevelScore}
          won={won}
        />
        {!won && <Link>View History</Link>}
      </div>
      {won ? (
        <div>
          <Button>Next Level</Button>
          <Link>New Game</Link>
        </div>
      ) : (
        <Button>Play Again</Button>
      )}
    </div>
  );
};
const svgStyle={height:'1.5rem'};
function ScoreCard({ total, lastLevelScore, levels, won }) {
  return (
    <div className="score-card">
      <div className="score-card-inner">
        <div className="label">Total</div>
        <div className="score">{total}</div>
      </div>
      <div className="score-card-inner">
        <div className="label">
          Level <span>{levels}</span>
        </div>
        <div className="score">{lastLevelScore}</div>
      </div>
      <div className="score-result">{won ? <React.Fragment>
      <img style={svgStyle} src="/assets/images/trophy.svg" alt="trophy" />
      <img style={svgStyle} src="/assets/images/hundred-points.svg" alt="hundred-points" />
        </React.Fragment>: <React.Fragment>
      <img style={svgStyle} src="/assets/images/broken-heart.svg" alt="broken-heart" />
      <img style={svgStyle} src="/assets/images/pensive-face.svg" alt="pensive-face" />
        </React.Fragment>}</div>

    </div>
  );
}
