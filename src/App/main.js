import React from "react";
import Route from "react-router-dom/es/Route";
import { AudioProvider } from "./Components/AudioManager";
import "./styles/main.scss";
import { HomeRoute, GameBoardRoute, ScoreBoardRoute, HistoryRoute, SettingRoute } from "./routes";
import withTracker from "./Components/withTracker";
export default Router => props => (
  <Router>
    <AudioProvider>
      <Route exact path="/" component={withTracker(HomeRoute)} />
      <Route path="/new-game" component={withTracker(GameBoardRoute)} />
      <Route path="/score" component={withTracker(ScoreBoardRoute)} />
      <Route path="/history" component={withTracker(HistoryRoute)} />
      <Route path="/setting" component={withTracker(SettingRoute)} />
    </AudioProvider>
  </Router>
);
