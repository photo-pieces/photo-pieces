import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import GameBoard from './Components/GameBoard';
import Home from "./Components/Home";
import ScoreBoard from "./Components/ScoreBoard";
import registerServiceWorker from "./register-service-worker";
if (window.location.pathname !== '/') {
  window.location = '/';
}else{
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/new-game" component={GameBoard} />
          <Route path="/score" component={ScoreBoard} />
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
registerServiceWorker();
}
