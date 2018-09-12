import React,{ Component } from "react";
import Piece from "./Piece";
import DragablePiece from "./DragablePiece";

import "../../styles/deck.css";
import { AudioConsumer } from "./../AudioManager";
class Deck extends Component {
  render() {
    const { pieces, picture } = this.props;
    return (
      <div className="container">
        <div className="deck">
          {pieces.map((piece, i) => {
            const Component = piece.matched ? Piece : DragablePiece;
            
            return <AudioConsumer key={i}>
                {({ playPick }) => (
                  <Component
                    picture={picture}
                    piece={piece}
                    playPick={playPick}
                  />
                )}
              </AudioConsumer>; 
          })}
        </div>
      </div>
    );
  }
}
export default Deck;
