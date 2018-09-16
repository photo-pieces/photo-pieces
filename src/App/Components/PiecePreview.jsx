import React from "react";
import { DragLayer } from "react-dnd";
import Piece from "./Deck/Piece";
function collectDragLayer(monitor) {
  var item = monitor.getItem();
  return { ...item, currentOffset: monitor.getSourceClientOffset(), isDragging: monitor.isDragging() };
}
function getItemStyles(currentOffset) {
  if (!currentOffset) {
    return {
      display: "none"
    };
  }
  const x = currentOffset.x;
  const y = currentOffset.y;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    position: "fixed",
    top: "0px",
    pointerEvents: "none",
    transform: transform,
    WebkitTransform: transform
  };
}
function Preview({ piece, picture, isDragging, currentOffset }) {
  if (!isDragging) {
    return null;
  }
  const styles = getItemStyles(currentOffset);
  return <Piece piece={piece} picture={picture} styles={styles} />;
}
const PiecePreview = DragLayer(collectDragLayer)(Preview);
export default PiecePreview;