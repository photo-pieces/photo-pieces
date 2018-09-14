import React from "react";
import ReactDOM from "react-dom";
import Route from "react-router-dom/es/Route";
import * as BrowserRouter from "react-router-dom/es/BrowserRouter";
import ComponentLoader from "./Components/ComponentLoader";
import * as ServiceWorker from "./service-worker";
import './styles/main.scss';

import { AudioProvider } from "./Components/AudioManager";

const Router = BrowserRouter.default;
function HomeRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPreload: true */ "./Routes/Home")}
    />
  );
}
function GameBoardRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() =>
        import(/* webpackPrefetch: true */ "./Routes/GameBoard")
      }
    />
  );
}
function ScoreBoardRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() =>
        import(/* webpackPrefetch: true */ "./Routes/ScoreBoard")
      }
    />
  );
}
function HistoryRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() =>
        import(/* webpackPrefetch: true */ "./Routes/History")
      }
    />
  );
}
function SettingRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPrefetch: true */ "./Routes/Setting")}
    />
  );
}

class App extends React.Component {
  
  render() {
    return <Router>
        <AudioProvider>
          <Route exact path="/" component={HomeRoute} />
          <Route path="/new-game" component={GameBoardRoute} />
          <Route path="/score" component={ScoreBoardRoute} />
          <Route path="/history" component={HistoryRoute} />
          <Route path="/setting" component={SettingRoute} />
        </AudioProvider>
      </Router>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
ServiceWorker.register();
