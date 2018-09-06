import React from 'react';
import { DragDropContext } from "react-dnd";
import { default as TouchBackend } from "react-dnd-touch-backend";
import {
  generateState,
  calculateStats,buildImageCache,
  dropPiece
} from "../utils";
import Picture from './Picture/Picture';
import Deck from "./Deck/Deck";

import PiecePreview from "./PiecePreview";
import Header from './Header';
import "../styles/game.css";


const MAX_TIME = 20000;


class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const { pieces, ...rest } = await generateState(300, 300);
    this.setState({
      ...rest,
      pieces: pieces.map(p => {
        p.matched = false;
        p.highlight = false;
        return p;
      })
    });
    this.timer = setTimeout(() => this.showScore(calculateStats(this.state)), MAX_TIME);
    buildImageCache();
  }
  dropPiece=id=>this.setState(dropPiece(id),() => {
      const stats = calculateStats(this.state);
      if (stats.result === "w") {
        this.showScore(stats);
      }})
  showScore(stats){
    this.props.history.push("/score", {
      result: "w",
      score: stats.score
    });
  }
  render() {
    if (!this.state.picture) {
      return null;
    }
    return <div className="App">
        <Header {...this.state} maxTime={MAX_TIME} />
        <Picture {...this.state} dropPiece={this.dropPiece} />
        <Deck {...this.state} />
        <PiecePreview />
      </div>;
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
}
export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(
  GameBoard
);