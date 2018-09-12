import React from "react";

import { DropTarget } from "react-dnd";
import { ItemTypes } from "../../constants";
import AnimationShell from "./AnimationShell";

const pieceTarget = {
  drop(props, monitor) {
    props.playDrop();
    props.dropPiece(monitor.getItem().piece.id);
  },
  canDrop(props, monitor) {
    if (props.piece.matched) {
      return false;
    }
    return props.piece.id === monitor.getItem().piece.id;
  }
};
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}
class PieceDropTarget extends React.Component {
  render() {
    const { connectDropTarget, isOver, canDrop, children, style } = this.props;
    const className = [];
    if (isOver) {
      if (canDrop) {
        className.push("allowed");
      } else {
        className.push("not-allowed");
      }
    }
    return connectDropTarget(
      <div>
        {children({ className })}
        <AnimationShell style={style} />
      </div>
    );
  }
}
export default DropTarget(ItemTypes.PIECE, pieceTarget, collect)(
  PieceDropTarget
);