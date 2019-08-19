import React from "react";
import RouterLink from "next/link";
import { Button, Link } from "../components/Buttons";
import css from "../styles/score-board.scss";
import { GAME_RESULT } from "../utils/constants";
import { calculateTotalScore } from "../utils/utils";
import ReactGA from "../utils/ga";

function createTwitterUrl(text, link) {
  return `https://twitter.com/share?text=${text}&url=${link}`;
}
function SocialMediaButton({ onClick }) {
  return (
    <Link className={css["social-media"]} onClick={onClick}>
      Share on{" "}
      <img
        className={css["icon"]}
        src="/static/assets/images/twitter.svg"
        alt="twitter"
      />
    </Link>
  );
}
function tweetTemplate(levels, total, result, lastLevelScore) {
  const description = `I scored ${total} 🔥 til level ${levels} 🚀. Play Photo Pieces. It is a fun and engaging free online game. Play it! `;
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

function ScoreCard({ total, lastLevel, levels, won }) {
  return (
    <div className={css["score-card"]}>
      <div className={css["score-card-inner"]}>
        <div className={css["label"]}>Total</div>
        <div className={css["score"]}>{total}</div>
      </div>
      <div className={css["score-card-inner"]}>
        <div className={css["label"]}>
          Level <span>{levels}</span>
        </div>
        <div className={css["score"]}>{lastLevel.score}</div>
      </div>
      <div className={css["score-result"]}>{won ? "🏆 💯" : "💔 😔"}</div>
    </div>
  );
}
export default () => {
  const { levels = [] } = {};
  const total = calculateTotalScore(levels);
  const lastLevel = levels[levels.length - 1] || {};
  const won = lastLevel.result ? lastLevel.result === GAME_RESULT.WON : false;
  ReactGA.event({
    category: "Score",
    action: `Level: ${levels.length}`,
    label: `${lastLevel.score}`,
    value: lastLevel.score
  });
  if (!won) {
    ReactGA.event({
      category: "Highest Score",
      action: `Level: ${levels.length}`,
      label: `${total}`,
      value: total
    });
  }
  function twitterClickHanlder() {
    const tpl = tweetTemplate(
      levels.length,
      total,
      lastLevel.result,
      lastLevel.score
    );
    ReactGA.event({
      category: "Navigation",
      action: "Share on twitter"
    });
    window.open(tpl);
  }

  return (
    <div className={css["score-board"]}>
      <div className={css["score-card-container"]}>
        <ScoreCard
          total={total}
          levels={levels.length}
          lastLevel={lastLevel}
          won={won}
        />
        {!won && (
          <RouterLink href="/history">
            <Link>View History</Link>
          </RouterLink>
        )}
      </div>

      {won ? (
        <div>
          <RouterLink href="/next-level">
            <Button>Next Level</Button>
          </RouterLink>

          <div className={css["link-btns"]}>
            <RouterLink href="/new-game">
              <Link>New Game</Link>
            </RouterLink>
            <SocialMediaButton onClick={twitterClickHanlder} />{" "}
          </div>
        </div>
      ) : (
        <div>
          <RouterLink href="/new-game">
            <Button>Play Again</Button>
          </RouterLink>

          <SocialMediaButton onClick={twitterClickHanlder} />
        </div>
      )}
    </div>
  );
};
