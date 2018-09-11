import { DropTarget } from "react-dnd";
import { ItemTypes } from "../../constants";
import Piece from "./Piece";
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
export default DropTarget(ItemTypes.PIECE, pieceTarget, collect)(Piece);