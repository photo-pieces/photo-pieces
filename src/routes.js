import React from "react";
import ComponentLoader from "./Components/ComponentLoader";
export function HomeRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPreload: true */ "./pages/Home")}
    />
  );
}
export function GameBoardRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPrefetch: true */ "./pages/GameBoard")}
    />
  );
}
export function ScoreBoardRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPrefetch: true */ "./pages/ScoreBoard")}
    />
  );
}
export function HistoryRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPrefetch: true */ "./pages/History")}
    />
  );
}
export function SettingRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPrefetch: true */ "./pages/Setting")}
    />
  );
}
export function ScreenshotRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPrefetch: true */ "./pages/Screenshot")}
    />
  );
}
