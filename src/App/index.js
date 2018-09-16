import React from "react";
import Route from "react-router-dom/es/Route";
import ComponentLoader from "./Components/ComponentLoader";
import { AudioProvider } from "./Components/AudioManager";
import "./styles/main.scss";

export function HomeRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPreload: true */ "./Routes/Home")}
    />
  );
}
export function GameBoardRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPrefetch: true */ "./Routes/GameBoard")}
    />
  );
}
export function ScoreBoardRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPrefetch: true */ "./Routes/ScoreBoard")}
    />
  );
}
export function HistoryRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPrefetch: true */ "./Routes/History")}
    />
  );
}
export function SettingRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPrefetch: true */ "./Routes/Setting")}
    />
  );
}

export default Router => props => (
  <Router>
    <AudioProvider>
      <Route exact path="/" component={HomeRoute} />
      <Route path="/new-game" component={GameBoardRoute} />
      <Route path="/score" component={ScoreBoardRoute} />
      <Route path="/history" component={HistoryRoute} />
      <Route path="/setting" component={SettingRoute} />
    </AudioProvider>
  </Router>
);
