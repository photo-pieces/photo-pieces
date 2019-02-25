import AnimationShell from "./AnimationShell";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "../../utils/constants";
import React from "react";

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
function PieceDropTarget(props) {
  const { connectDropTarget, isOver, canDrop, children, style } = props;
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
export default DropTarget(ItemTypes.PIECE, pieceTarget, collect)(
  PieceDropTarget
);
