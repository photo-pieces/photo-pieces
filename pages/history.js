import React from "react";

import RouterLink from "next/link";
// import { getStats } from "../utils/game";
import css from "../styles/history.scss";

// import { calculateTotalScore } from "../utils/utils";
// function groupByDate(snapshots) {
//   const result = {};
//   snapshots.reverse();
//   let highest = {
//     score: 0,
//     level: 0
//   };
//   snapshots.forEach(({ time, levels, ...rest }) => {
//     const date = new Date(time);
//     const dateString = date.toLocaleDateString();
//     const timeString = date.toLocaleTimeString();
//     const totalScore = calculateTotalScore(levels);
//     const level = levels.length;
//     const snapshot = { totalScore, timeString, level };
//     if (highest.score < totalScore) {
//       highest = { score: totalScore, level: level };
//     }
//     if (result[dateString]) {
//       result[dateString].push(snapshot);
//     } else {
//       result[dateString] = [snapshot];
//     }
//   });
//   return { highest, items: result };
// }

export default function History() {
  // const { snapshots } = getStats();
  // TODO:  add fetch history logic
  const { items = [], highest = {} } = {}; //groupByDate(snapshots);
  const dates = Object.keys(items);
  return (
    <div className={css["history-wrapper"]}>
      <div className={css["history-header"]}>
        <div className={css["history-header-container"]}>
          <div className={css["history-header-inner"]}>
            <RouterLink href="/">
              <div className={css["history-back-arrow"]}>❮</div>
            </RouterLink>

            <div className={css["history-header-title"]}>History</div>
            {/* <div className={css["history-delete-icon" onClick={e => clearStats() || history.replace("/")}>
              <img src="assets/images/icon-trash.svg" alt="delete-history" />
            </div> */}
          </div>
        </div>
        <div className={css["highest-content-bar"]}>
          <div className={css["highest-content-bar-inner"]}>
            <div>
              <span>Highest Score : </span>
              <span>{highest.score}</span>
            </div>
            <div>
              <span>Level : </span>
              <span>{highest.level}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={css["history-content"]}>
        {dates.length > 0 ? (
          dates.map(date => {
            return (
              <div className={css["history-content-container"]} key={date}>
                <div className={css["history-date"]}>
                  <div className={css["history-date-inner"]}>{date}</div>
                </div>
                <div className={css["history-result-wrapper"]}>
                  {items[date].map((item, i) => {
                    return (
                      <div className={css["history-result"]} key={i}>
                        <div className={css["history-time"]}>{item.timeString}</div>
                        <div className={css["history-score"]}>
                          <b className={css["score"]}>{item.totalScore}</b> score
                        </div>
                        <div className={css["history-level"]}>
                          <b className={css["score"]}>{item.level}</b> Level
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className={css["placeholder"]}>
            <img src="/static/assets/images/sad.svg" alt="sad" />
            <h3>You haven't played yet !!!</h3>
          </div>
        )}
      </div>
    </div>
  );
}
