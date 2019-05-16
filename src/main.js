import React from "react";
import Route from "react-router-dom/es/Route";

import * as BrowserRouter from "react-router-dom/es/BrowserRouter";
import { AudioProvider } from "./Components/AudioManager";
import "./styles/main.scss";
import {
  HomeRoute,
  GameBoardRoute,
  ScoreBoardRoute,
  HistoryRoute,
  SettingRoute,
  ScreenshotRoute
} from "./routes";
import withTracker from "./Components/withTracker";

const Router = BrowserRouter.default;

export default () => (
  <Router>
    <AudioProvider>
      <Route exact path="/" component={withTracker(HomeRoute)} />
      <Route path="/new-game" component={withTracker(GameBoardRoute)} />
      <Route path="/score" component={withTracker(ScoreBoardRoute)} />
      <Route path="/history" component={withTracker(HistoryRoute)} />
      <Route path="/setting" component={withTracker(SettingRoute)} />
      <Route path="/screenshot" component={ScreenshotRoute} />
    </AudioProvider>
  </Router>
);
