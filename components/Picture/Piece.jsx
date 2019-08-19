import React from "react";
import css from './piece.scss';

function Piece(props) {
  const { piece, style, className = [] } = props;
  const cls = [css["piece"]].concat(className);
  if (piece.matched) {
    cls.push(css["matched"]);
  }
  return (
    <span className={cls.join(" ")} style={style}>
      {piece.matched ? piece.score : ""}
    </span>
  );
}
export default Piece;
