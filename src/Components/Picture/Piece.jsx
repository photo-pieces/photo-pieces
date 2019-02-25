import React from "react";

function Piece(props) {
  const { piece, style, className = [] } = props;
  const cls = ["piece"].concat(className);
  if (piece.matched) {
    cls.push("matched");
  }
  return (
    <span className={cls.join(" ")} style={style}>
      {piece.matched ? piece.score : ""}
    </span>
  );
}
export default Piece;
