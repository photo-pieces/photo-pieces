import React,{ Component } from "react";
import Piece from "./Piece";
import DragablePiece from "./DragablePiece";

class Deck extends Component {
  render() {
    const { pieces, picture } = this.props;
    return (
      <div className="container">
        <div className="deck">
          {pieces.map((piece, i) => {
            const Component = piece.matched ? Piece : DragablePiece;
            return <Component key={i} picture={picture} piece={piece} />;
          })}
        </div>
      </div>
    );
  }
}
export default Deck;
