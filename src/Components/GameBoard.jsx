import React from 'react';
import {
  generateState,
  debounce,
  calculateStats,
  onDragLeave,
  onDragEnter,
  dropPiece
} from "./../utils";
import Picture from './Picture';
import Deck from './Deck';
import Header from './Header';
import "../styles/game.css";

const MAX_TIME = 5000;
class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPiece: null
    };
    this.onDragEnter = debounce(this._onDragEnter, 1);
    this.onDragLeave = debounce(this._onDragLeave, 1);
  }
  async componentDidMount() {
    const { pieces, ...rest } = await generateState(500, 300);
    this.setState({
      ...rest,
      pieces: pieces.map(p => {
        p.matched = false;
        p.highlight = false;
        return p;
      }),
      currentPiece: null
    }) ;
    // this.timer = setTimeout(() => {
    //   const stats = calculateStats(this.state);
    //   this.props.history.push(`/score/${stats.result}/${stats.score}`);
    // }, MAX_TIME);
  }
  pickPiece = currentPiece => {
    this.setState({
      currentPiece
    });
  };
  _onDragLeave = id => this.setState(onDragLeave(id));
  _onDragEnter = id => this.setState(onDragEnter(id));
  dropPiece = id => 
    this.setState(dropPiece(id), () => {
      const stats = calculateStats(this.state);
      if (stats.result === "w") {
        this.props.history.push(`/score/w/${stats.score}`);
      }
    });
  render() {
    if (!this.state.picture){
      return null;
    } 
    return <div className="App">
          <Header {...this.state} maxTime={MAX_TIME} />
          <Picture {...this.state} onDragLeave={this.onDragLeave} onDrop={this.dropPiece} onDragEnter={this.onDragEnter} />
          <Deck {...this.state} onDragStart={this.pickPiece} />
        </div>;
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
}
export default GameBoard;
