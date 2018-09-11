import React from "react";
const { Provider, Consumer } = React.createContext();

export class AudioProvider extends React.Component {
  constructor(props) {
    super(props);
    this.methods = { playPick: this.playPick, playDrop: this.playDrop };
  }
  dropEl = React.createRef();
  pickEl = React.createRef();
  playPick = async () => {
    try {
      await this.pickEl.current.play();
    } catch (e) {
      console.log(e);
    }
  };
  playDrop = async () => {
    try {
      await this.dropEl.current.play();
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div>
        <audio ref={this.dropEl}>
          <source src="/assets/audio/drop.mp3" type="audio/mp3" />
        </audio>
        <audio ref={this.pickEl}>
          <source src="/assets/audio/pick.mp3" type="audio/mp3" />
        </audio>
        <Provider value={this.methods}>{this.props.children}</Provider>
      </div>
    );
  }
}
export const AudioConsumer = Consumer;
