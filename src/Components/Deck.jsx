import React, { Component } from 'react';
import { DragSource } from "react-dnd";
import {ItemTypes} from './../constants';

const pieceSource = {
  beginDrag(props) {
    return { id: props.piece.id };
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}
class Piece extends React.Component {
  render() {
    const { picture, piece } = this.props;
    const { connectDragSource, isDragging=false } = this.props;
    const styles = {
      backgroundImage: `url(${picture})`,
      width: piece.size,
      height: piece.size,
      color:isDragging?'white':'black',
      border:`2px solid ${isDragging?'white':'black'}`,
      backgroundPosition: `-${piece.x}px -${piece.y}px`
    };  
    return connectDragSource ? connectDragSource(<span className="piece" style={styles} key={piece.id}>
          {piece.score}
        </span>) : <span className="piece" style={styles} key={piece.id}>
        {piece.score}
      </span>;
  }
}
const DragablePiece = DragSource(ItemTypes.PIECE, pieceSource, collect)(Piece);
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


