import { DragSource } from "react-dnd";
import { ItemTypes } from "../../utils/constants";
import Piece from "./Piece";

const pieceSource = {
  beginDrag({ picture, piece, playPick }) {
    // playPick();
    // TODO:
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
const DragablePiece = DragSource(ItemTypes.PIECE, pieceSource, collect)(Piece);
export default DragablePiece;
