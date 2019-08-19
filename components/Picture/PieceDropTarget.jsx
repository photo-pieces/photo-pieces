import AnimationShell from "./AnimationShell";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "../../utils/constants";
import React from "react";

import css from './piece.scss';


const pieceTarget = {
  drop(props, monitor) {
    // props.playDrop();
    // TODO:
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
      className.push(css["allowed"]);
    } else {
      className.push(css["not-allowed"]);
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
