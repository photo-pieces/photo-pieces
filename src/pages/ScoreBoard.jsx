import React from "react";
import { Button, Link } from "../Components/Buttons";
import "../styles/score-board.scss";
import { GAME_RESULT } from "../utils/constants";
import { calculateTotalScore } from "../utils/utils";
import ReactGA from "../utils/ga";

function createTwitterUrl(text, link) {
  return `https://twitter.com/share?text=${text}&url=${link}`;
}
function SocialMediaButton({ onClick }) {
  return (
    <Link className="social-media" onClick={onClick}>
      Share on{" "}
      <img className="icon" src="/assets/images/twitter.svg" alt="twitter" />
    </Link>
  );
}
function tweetTemplate(levels, total, result, lastLevelScore) {
  const description=`I scored ${total} 🔥 til level ${levels} 🚀. Play Photo Pieces. It is a fun and engaging free online game. Play it! `;
  const statsQuery = btoa(
    JSON.stringify({
      levels,
      result,
      total,
      lastLevelScore
    })
  );
  const link = `${window.location.origin}/api/share?stats=${statsQuery}`;
  return createTwitterUrl(description, link);
}

export default ({ location, history }) => {
  const { levels = [] } = location.state || {};
  const total = calculateTotalScore(levels);
  const lastLevel = levels[levels.length - 1] || {};
  const won = lastLevel.result ? lastLevel.result === GAME_RESULT.WON : false;
  ReactGA.event({
    category: "Level",
    action: "" + levels.length,
    label: "" + lastLevel.score
  });
  function twitterClickHanlder() {
    const tpl = tweetTemplate(
      levels.length,
      total,
      lastLevel.result,
      lastLevel.score
    );
    ReactGA.event({
      category: "Navigation",
      action: "Share on twitter",
      label: "ScoreBoard"
    });
    window.open(tpl);
  }

  return (
    <div className="score-board">
      <div className="score-card-container">
        <ScoreCard
          total={total}
          levels={levels.length}
          lastLevel={lastLevel}
          won={won}
        />
        {!won && (
          <Link onClick={e => history.replace("/history")}>View History</Link>
        )}
      </div>

      {won ? (
        <div>
          <Button onClick={e => history.replace("/new-game", { levels })}>
            Next Level
          </Button>
          <div className="link-btns">
            <Link
              onClick={e => {
                ReactGA.event({
                  category: "Navigation",
                  action: "New Game",
                  label: "ScoreBoard"
                });
                history.replace("/new-game");
              }}
            >
              New Game
            </Link>
            <SocialMediaButton onClick={twitterClickHanlder} />{" "}
          </div>
        </div>
      ) : (
        <div>
          <Button
            onClick={e => {
              ReactGA.event({
                category: "Navigation",
                action: "New Game",
                label: "ScoreBoard"
              });
              history.replace("/new-game");
            }}
          >
            Play Again
          </Button>

          <SocialMediaButton onClick={twitterClickHanlder} />
        </div>
      )}
    </div>
  );
};

function ScoreCard({ total, lastLevel, levels, won }) {
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
        <div className="score">{lastLevel.score}</div>
      </div>
      <div className="score-result">{won ? "🏆 💯" : "💔 😔"}</div>
    </div>
  );
}
