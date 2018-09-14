import React,{ Component } from "react";


import { AudioConsumer } from "./../AudioManager";
import PieceDropTarget from "./PieceDropTarget";
import Piece from "./Piece";
import "../../styles/picture.scss";

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
            {pieces.map((piece, key) => {
              return <AudioConsumer key={key}>
                  {({ methods }) => {
                    const style = { width: piece.size, height: piece.size, top: piece.y, left: piece.x };
                    const baseProps = { style, piece, dropPiece, playDrop:methods.playDrop };
                    return piece.matched ? <Piece {...baseProps} /> : <PieceDropTarget
                        {...{ style, ...baseProps }}
                      >
                        {extra => (
                          <Piece
                            {...{ ...baseProps, ...extra }}
                          />
                        )}
                      </PieceDropTarget>;
                  }}
                </AudioConsumer>;
            })}
          </div>
        </div>
      </div>;
  }
}

export default Picture;
