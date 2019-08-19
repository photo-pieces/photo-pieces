import css from "./deck.scss";

import React, { useContext } from "react";

import { AudioContext } from "./../AudioManager";
import DragablePiece from "./DragablePiece";
import Piece from "./Piece";

export default function({ pieces, picture }) {
  // const { methods } = useContext(AudioContext);
  // TODO:
  return (
    <div className={css["container"]}>
      <div className={css["deck"]}>
        {pieces.map((piece, i) => {
          const Component = piece.matched ? Piece : DragablePiece;

          return (
            <Component
              key={i}
              picture={picture}
              piece={piece}
              playPick={null}
            />
          );
        })}
      </div>
    </div>
  );
}
