import React from 'react';
import { generateState, debounce } from './../utils';
import Picture from './Picture';
import Deck from './Deck';
import Header from './Header';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    const { pieces, ...rest } = generateState(500, 300);
    this.state = {
      ...rest,
      pieces: pieces.map(p => {
        p.matched = false;
        p.highlight = false;
        return p;
      }),
      currentPiece: null
    };
    this.onDragEnter = debounce(this._onDragEnter, 1);
    this.onDragLeave = debounce(this._onDragLeave, 1);
  }
  pickPiece = currentPiece => {
    this.setState({
      currentPiece
    });
  };
  _onDragLeave = id => {
    this.setState(prevState => {
      const { pieces } = prevState;
      return {
        ...prevState,
        pieces: pieces.map(p => {
          if (p.id === id) {
            p.highlight = false;
          }
          return p;
        })
      };
    });
  };
  _onDragEnter = id => {
    this.setState(prevState => {
      const { pieces } = prevState;
      return {
        ...prevState,
        pieces: pieces.map(p => {
          if (p.id === id) {
            p.highlight = true;
          }
          return p;
        })
      };
    });
  };
  dropPiece = id => {
    this.setState(prevState => {
      const { pieces, currentPiece } = prevState;
      return {
        ...prevState,
        pieces: pieces.map(p => {
          if (p.id === id) {
            p.highlight = false;
            p.matched = currentPiece === id;
          }
          return p;
        })
      };
    });
  };
  render() {
    return (
      <div className="App">
        <Header {...this.state} />
        <Picture
          {...this.state}
          onDragLeave={this.onDragLeave}
          onDrop={this.dropPiece}
          onDragEnter={this.onDragEnter}
        />
        <Deck {...this.state} onDragStart={this.pickPiece} />
      </div>
    );
  }
}
export default GameBoard;
