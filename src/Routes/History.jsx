import React from "react";
import { getStats, clearStats } from "../game";
import "../styles/history.css";

import { calculateTotalScore } from "../utils";
function groupByDate(snapshots) {
  const result = {};
  snapshots.reverse();
  let highest={
    score:0,level:0
  }
  snapshots.forEach(({ time,levels, ...rest }) => {
    const date = new Date(time);
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    const totalScore = calculateTotalScore(levels);
    const level=levels.length;
    const snapshot = { totalScore, timeString, level  };
    if (highest.score < totalScore) {
      highest = { score: totalScore, level: level };
    }
    if (result[dateString]) {
        result[dateString].push(snapshot);
      } else {
        result[dateString] = [snapshot];
      }
  });
  return { highest, items: result };
}
export default function History({ history }) {
  const { snapshots } = getStats();
  const { items, highest } = groupByDate(snapshots);
  const dates = Object.keys(items);
  return <div className="history-wrapper">
      <div className="history-header">
        <div className="history-header-container">
          <div className="history-back-arrow" onClick={e => history.replace("/")}>
            ❮
          </div>
          <div className="history-header-title">History</div>
          <div className="history-delete-icon" onClick={e => clearStats() || history.replace("/")}>
            <img src="assets/images/icon-trash.svg" alt="delete-history" />
          </div>
        </div>
        <div className="highest-content-bar">
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

      <div className="history-content">
        {dates.length > 0 ? dates.map(date => {
            return <div className="history-content-container" key={date}>
                <div className="history-date">{date}</div>
                <div className="history-result-wrapper">
                  {items[date].map((item, i) => {
                    return <div className="history-result" key={i}>
                        <div className="history-time">{item.timeString}</div>
                        <div className="history-score">
                          <b className="score">{item.totalScore}</b> score
                        </div>
                        <div className="history-level">
                          <b className="score">{item.level}</b> Level
                        </div>
                      </div>;
                  })}
                </div>
              </div>;
          }) : <div className="placeholder">
            <img src="/assets/images/sad.svg" alt="sad" />
            <h3>You haven't played yet !!!</h3>
          </div>}
      </div>
    </div>;
}