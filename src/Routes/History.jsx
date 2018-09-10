import React from "react";
import { getStats } from "../game";
import "../styles/history.css";

import { calculateTotalScore } from "../utils";
function groupByDate(snapshots) {
  const result = {};
  snapshots.reverse();
  snapshots.forEach(({ time, ...rest }) => {
    const date = new Date(time);
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    const snapshot = { ...rest, timeString };
    if (result[dateString]) {
      result[dateString].push(snapshot);
    } else {
      result[dateString] = [snapshot];
    }
  });
  return result;
}
export default function History({ history }) {
  const { snapshots } = getStats();
  const items = groupByDate(snapshots);
  return (
    <div className="history-wrapper">
      <div className="history-header">
        <div className="history-header-container">
          <div
            className="history-back-arrow"
            onClick={e => history.push("/")}
          >
            ❮
          </div>
          <div className="history-header-title">History</div>
          <div />
        </div>
      </div>
      <div className="history-content">
        {Object.keys(items).map(key => {
          return (
            <div className="history-content-container" key={key}>
              <div className="history-date">{key}</div>
              <div className="history-result-wrapper">
                {items[key].map((item, i) => {
                  return (
                    <div className="history-result" key={i}>
                      <div className="history-time">{item.timeString}</div>
                      <div className="history-score">
                        <b className="score">{calculateTotalScore(item.levels)}</b>{" "}
                        score
                      </div>
                      <div className="history-level">
                        Level <b className="score">{item.levels.length}</b>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}