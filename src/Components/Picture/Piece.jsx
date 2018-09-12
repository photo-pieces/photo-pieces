import React from "react";
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
    if (!piece.matched && isOver) {
      if (canDrop) {
        cls.push("allowed");
      } else {
        cls.push("not-allowed");
      }
    } else if (piece.matched) {
      cls.push("matched");
    }
    return connectDropTarget(<div>
      <span className={cls.join(" ")} style={pieceStyles} key={piece.id}>
        {piece.matched ? piece.score : ""}
      </span>
      <svg className="piece-svg" style={pieceStyles} height="100" viewBox="0 0 200 200">
        <polygon
          class="path"
          points="0 0, 100 0, 100 0, 200 0, 200 200, 0 200, 0 100, 0 100, 0 100" 
          stroke="#fff"
          fill="transparent"
          stroke-width="10"/>
      </svg>
    </div>);
  }
}
export default Piece;