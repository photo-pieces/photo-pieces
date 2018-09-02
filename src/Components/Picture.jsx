import React, { Component } from 'react';

class Picture extends Component {
  onDragOver(e, id) {
    e.preventDefault();
  }
  render() {
    const { size, pieces, picture, currentPiece } = this.props;
    const styles = {
      width: size.width,
      height: size.height,
      backgroundImage: `url(${picture})`
    };
    return (
      <div className="container">
        <div className="picture" style={styles}>
          {pieces.map(piece => {
            const pieceStyles = {
              width: piece.size,
              height: piece.size,
              lineHeight: `${piece.size}px`,
              top: piece.y,
              left: piece.x
            };
            const events = !piece.matched
              ? {
                  onDragOver: e => this.onDragOver(e),
                  onDragEnter: e => this.props.onDragEnter(piece.id),
                  onDrop: e => this.props.onDrop(piece.id),
                  onDragLeave: e => this.props.onDragLeave(piece.id)
                }
              : null;
            const cls = ['piece'];
            if (piece.highlight) {
              if (currentPiece === piece.id) {
                cls.push('allowed');
              } else {
                cls.push('not-allowed');
              }
            } else if (piece.matched) {
              cls.push('matched');
            }
            return (
              <span
                {...events}
                className={cls.join(' ')}
                style={pieceStyles}
                key={piece.id}
              >
                {piece.id + 1}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Picture;
