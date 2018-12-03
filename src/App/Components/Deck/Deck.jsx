import "../../styles/deck.scss";

import React, { useContext } from "react";

import { AudioContext } from "./../AudioManager";
import DragablePiece from "./DragablePiece";
import Piece from "./Piece";

export default function({ pieces, picture }) {
  const { methods } = useContext(AudioContext);
  return (
    <div className="container">
      <div className="deck">
        {pieces.map((piece, i) => {
          const Component = piece.matched ? Piece : DragablePiece;

          return (
            <Component
              key={i}
              picture={picture}
              piece={piece}
              playPick={methods.playPick}
            />
          );
        })}
      </div>
    </div>
  );
}
