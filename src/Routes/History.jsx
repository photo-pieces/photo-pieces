import React from "react";
import { getStats, clearStats } from "../game";
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
  const dates = Object.keys(items);
  return <div className="history-wrapper">
      <div className="history-header">
        <div className="history-header-container">
          <div className="history-back-arrow" onClick={e => history.push("/")}>
            ❮
          </div>
          <div className="history-header-title">History</div>
          <div className="history-delete-icon" onClick={e => clearStats() || history.push("/")}>
            <img src="assets/images/icon-trash.svg" alt="delete-history" />
          </div>
        </div>
      </div>
      <div className="history-content">
        {dates.length>0 ? dates.map(date => {
            return <div className="history-content-container" key={date}>
                <div className="history-date">{date}</div>
                <div className="history-result-wrapper">
                  {items[date].map((item, i) => {
                    return <div className="history-result" key={i}>
                        <div className="history-time">{item.timeString}</div>
                        <div className="history-score">
                          <b className="score">
                            {calculateTotalScore(item.levels)}
                          </b> score
                        </div>
                        <div className="history-level">
                          <b className="score">{item.levels.length}</b> Level
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