import React from "react";
import ComponentLoader from "./Components/ComponentLoader";
export function HomeRoute(props) {
  return (<ComponentLoader {...props} loader={() => import(/* webpackPreload: true */ "./Routes/Home")} />);
}
export function GameBoardRoute(props) {
  return (<ComponentLoader {...props} loader={() => import(/* webpackPrefetch: true */ "./Routes/GameBoard")} />);
}
export function ScoreBoardRoute(props) {
  return (<ComponentLoader {...props} loader={() => import(/* webpackPrefetch: true */ "./Routes/ScoreBoard")} />);
}
export function HistoryRoute(props) {
  return (<ComponentLoader {...props} loader={() => import(/* webpackPrefetch: true */ "./Routes/History")} />);
}
export function SettingRoute(props) {
  return (<ComponentLoader {...props} loader={() => import(/* webpackPrefetch: true */ "./Routes/Setting")} />);
}