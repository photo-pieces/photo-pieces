import React, { Component } from "react";

import { DropTarget } from "react-dnd";

import { ItemTypes } from "./../constants";

const pieceTarget = {
  drop(props, monitor) {
    props.dropPiece(monitor.getItem().id);
  },
  canDrop(props, monitor) {
    if (props.piece.matched) {
      return false;
    }
    return props.piece.id === monitor.getItem().id;
  }
};
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}
class Piece extends React.Component {
  render() {
    const { piece } = this.props;
    const { connectDropTarget, isOver, canDrop } = this.props;
    const pieceStyles = {
      width: piece.size,
      height: piece.size,
      lineHeight: `${piece.size}px`,
      top: piece.y,
      left: piece.x
    };
    const cls = ["piece"];
    if (isOver) {
      if (canDrop) {
        cls.push("allowed");
      } else {
        cls.push("not-allowed");
      }
    } else if (piece.matched) {
      cls.push("matched");
    }
    return connectDropTarget(<span className={cls.join(" ")} style={pieceStyles} key={piece.id}>
        {piece.matched?piece.score:""}
      </span>);
  }
}

const PieceDropTarget = DropTarget(ItemTypes.PIECE, pieceTarget, collect)(
  Piece
);

class Picture extends Component {
  render() {
    const { size, pieces, picture, dropPiece } = this.props;
    const styles = {
      width: size.width,
      height: size.height,
      backgroundImage: `url(${picture})`
    };
    return (
      <div className="container picture-wrapper">
        <div className="picture" style={styles}>
          {pieces.map((piece, i) => {
            return (
              <PieceDropTarget key={i} piece={piece} dropPiece={dropPiece} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Picture;
