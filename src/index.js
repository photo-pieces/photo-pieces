import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import registerServiceWorker from "./register-service-worker";
if (window.location.pathname !== "/") {
  window.location = "/";
} else {
  class DynamicComponent extends React.Component {
    state = {
      Component: null
    };
    async componentWillMount() {
      try {
        await this.fetchComponent();
      } catch (e) {
        console.log(e);
      }
    }
    async fetchComponent() {
      const Component = await this.props.loader();
      this.setState({
        Component:
          Component && Component.default
            ? Component.default
            : Component });
    }
    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  }

  function HomeRoute(props) {
    return <DynamicComponent {...props} loader={() => import(/* webpackPrefetch: true */ "./Components/Home")} />;
  }
  function GameBoardRoute(props) {
    return <DynamicComponent {...props} loader={() => import(/* webpackPrefetch: true */ "./Components/GameBoard")} />;
  }
  function ScoreBoardRoute(props) {
    return <DynamicComponent {...props} loader={() => import(/* webpackPrefetch: true */ "./Components/ScoreBoard")} />;
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

  const rootElement = document.getElementById("root");

  ReactDOM.render(<App />, rootElement);
  registerServiceWorker();
}
