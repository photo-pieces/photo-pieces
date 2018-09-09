import React from "react";
import ReactDOM from "react-dom";
import Route from "react-router-dom/es/Route";
import * as BrowserRouter from "react-router-dom/es/BrowserRouter";
import ComponentLoader from "./Components/ComponentLoader";
import * as ServiceWorker from "./service-worker";
const Router = BrowserRouter.default;
function HomeRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() => import(/* webpackPreload: true */ "./Components/Home")}
    />
  );
}
function GameBoardRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() =>
        import(/* webpackPrefetch: true */ "./Components/GameBoard")
      }
    />
  );
}
function ScoreBoardRoute(props) {
  return (
    <ComponentLoader
      {...props}
      loader={() =>
        import(/* webpackPrefetch: true */ "./Components/ScoreBoard")
      }
    />
  );
}
class App extends React.Component {
  
  render() {
    return <Router>
        <div>
          <Route exact path="/" component={HomeRoute} />
          <Route path="/new-game" component={GameBoardRoute} />
          <Route path="/score" component={ScoreBoardRoute} />
        </div>
      </Router>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
ServiceWorker.register();
