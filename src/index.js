import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './Components/GameBoard';

import './styles.css';

class App extends React.Component {
  render() {
    return <GameBoard />;
  }
}
const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
