import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './Components/GameBoard';
import {
  BrowserRouter as Router,
  Route,
  Link,
  History
} from 'react-router-dom';
import './styles.css';
if (window.location.pathname !== '/') {
  window.location = '/';
}
const Home = () => (
  <div>
    <ul>
      <li>
        <Link to="/new-game">Play</Link>
      </li>
    </ul>
  </div>
);
const ScoreBoard = ({ match }) => (
  <div>
    <div>
      {match.params.result === 'w' ? (
        <div>won, score:{match.params.score}</div>
      ) : (
        <div>Lost</div>
      )}
    </div>
    <ul>
      <li>
        <Link to="/new-game">Play Again</Link>
      </li>
    </ul>
  </div>
);
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/new-game" component={GameBoard} />
          <Route path="/score/:result/:score" component={ScoreBoard} />
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
