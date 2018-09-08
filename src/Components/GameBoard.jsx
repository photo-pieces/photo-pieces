import React from 'react';
import { DragDropContext } from "react-dnd";
import { default as TouchBackend } from "react-dnd-touch-backend";
import {
  generateState,
  buildImageCache
} from "../utils";
import { calculateStats, dropPiece, saveStats } from "../game";
import Picture from './Picture/Picture';
import Deck from "./Deck/Deck";
import {GAME_RESULT} from "./../constants";
import PiecePreview from "./PiecePreview";
import Header from './Header';
import "../styles/game.css";

function Level({value}){
  return <div>
      <span>Level</span>
      <span>{new Array(value).fill("🏅").join(" ")}</span>
    </div>;
}
class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const {levels=[]}=this.props.location.state||{};
    if (levels.length===0) {
      saveStats(levels);
    }
    const state = await generateState(300, 300, levels.length);
    this.setState({ ...state});
    this.timer = setTimeout(() => this.showScore(calculateStats(this.state)), state.interval*1000);
    buildImageCache();
  }
  dropPiece=id=>this.setState(dropPiece(id),() => {
      const stats = calculateStats(this.state);
      if (stats.result === GAME_RESULT.WON) {
        this.showScore(stats);
      }})
  showScore(stats){
    const { levels = [] } = this.props.location.state||{};
    levels.push(stats);
    saveStats(levels,true);
    this.props.history.push("/score", { levels });
  }
  render() {
    if (!this.state.picture) {
      return null;
    }
    const { levels = [] } = this.props.location.state || {};
    return <div className="App">
        <Header {...this.state} maxTime={this.state.interval} />
        <Level value={levels.length + 1} />
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