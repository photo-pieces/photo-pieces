import React from "react";


class Piece extends React.Component {
  render() {
    const { piece, style, className=[] } = this.props;
    const cls = ["piece"].concat(className);
    if (piece.matched) {
      cls.push("matched");
    }
    return <span className={cls.join(" ")} style={style} >
        {piece.matched ? piece.score : ""}
      </span>;
  }
}
export default Piece;


