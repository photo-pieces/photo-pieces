import React, { Component } from 'react';

class Deck extends Component {
  render() {
    const { pieces, picture, onDragStart } = this.props;
    return (
      <div className="container">
        <div className="deck">
          {pieces.map((piece, i) => {
            const styles = {
              backgroundImage: `url(${picture})`,
              width: piece.size,
              height: piece.size,
              backgroundPosition: `-${piece.x}px -${piece.y}px`
            };
            return (
              <span
                onDragStart={e => onDragStart(piece.id)}
                draggable={!piece.matched}
                className="piece"
                style={styles}
                key={piece.id}
              >
                {piece.matched ? piece.id + 1 : ''}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Deck;
