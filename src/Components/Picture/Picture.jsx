import React,{ Component } from "react";


import PieceDropTarget from "./PieceDropTarget";

class Picture extends Component {
  render() {
    const { size, pieces, picture, dropPiece } = this.props;
    const styles = {
      width: size.width,
      height: size.height,
      backgroundImage: `url(${picture})`
    };
    return <div className="container picture-wrapper">
        <div className="picture-bg">
          <div className="picture" style={styles}>
            {pieces.map((piece, i) => {
              return <PieceDropTarget key={i} piece={piece} dropPiece={dropPiece} />;
            })}
          </div>
        </div>
      </div>;
  }
}

export default Picture;
