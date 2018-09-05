import React, { Component } from "react";
import { DragSource, DragLayer } from "react-dnd";
import { ItemTypes } from "./../constants";

const pieceSource = {
  beginDrag({ picture, piece }) {
    return { picture, piece };
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}
function noop(item) {
  return item;
}
class Piece extends React.Component {
  render() {
    const { picture, piece, currentOffset = null } = this.props;
    const {
      connectDragSource = noop,
      connectDragPreview = noop,
      isDragging = false
    } = this.props;
    let styles = {
      backgroundImage: `url(${picture})`,
      width: piece.size,
      height: piece.size,
      border:`2px solid ${isDragging?'white':'#444'}`,
      backgroundPosition: `-${piece.x}px -${piece.y}px`
    };

    styles = currentOffset ? getItemStyles(currentOffset, styles) : styles;
    const text = piece.matched ? <span>
        ✔
      </span> : <span>{piece.score}</span>;
    let content = <span className="piece" style={styles} key={piece.id}>
        {text}
      </span>;
    content = connectDragSource(content);
    content = connectDragPreview(content);
    return content;
  }
}
const DragablePiece = DragSource(ItemTypes.PIECE, pieceSource, collect)(Piece);

function collectDragLayer(monitor) {
  var item = monitor.getItem();
  return { ...item, currentOffset: monitor.getSourceClientOffset(), isDragging: monitor.isDragging() };
}
function getItemStyles(currentOffset, styles) {
  if (!currentOffset) {
    return {
      display: "none"
    };
  }
  const x = currentOffset.x;
  const y = currentOffset.y;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    ...styles,
    position: "fixed",
    top:"0px",
    pointerEvents: "none",
    transform: transform,
    WebkitTransform: transform
  };
}
function Preview({ piece, picture, isDragging, currentOffset }) {
  if (!isDragging) {
    return null;
  }
  return (
    <Piece piece={piece} picture={picture} currentOffset={currentOffset} />
  );
}
export const ItemPreview = DragLayer(collectDragLayer)(Preview);

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
