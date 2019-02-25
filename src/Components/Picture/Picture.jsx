import "../../styles/picture.scss";

import React, { useContext } from "react";

import { AudioContext } from "./../AudioManager";
import Piece from "./Piece";
import PieceDropTarget from "./PieceDropTarget";

function Picture(props) {
  const { methods } = useContext(AudioContext);
  const { size, pieces, picture, dropPiece } = props;
  const styles = {
    width: size.width,
    height: size.height,
    backgroundImage: `url(${picture})`
  };
  return (
    <div className="container picture-wrapper">
      <div className="picture-bg">
        <div className="picture" style={styles}>
          {pieces.map((piece, key) => {
            const style = {
              width: piece.size,
              height: piece.size,
              top: piece.y,
              left: piece.x
            };
            const baseProps = {
              style,
              piece,
              dropPiece,
              playDrop: methods.playDrop
            };
            return piece.matched ? (
              <Piece key={key} {...baseProps} />
            ) : (
              <PieceDropTarget key={key} {...{ style, ...baseProps }}>
                {extra => <Piece {...{ ...baseProps, ...extra }} />}
              </PieceDropTarget>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Picture;
