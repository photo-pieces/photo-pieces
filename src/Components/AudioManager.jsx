import React from "react";
const { Provider, Consumer } = React.createContext();

export class AudioProvider extends React.Component {
         constructor(props) {
           super(props);
           this.methods = { playPick: this.playPick, playDrop: this.playDrop, silent: this.silent };
         }
         dropEl = React.createRef();
         pickEl = React.createRef();
         silent=(value=true)=>{
             this.pickEl.current.muted = value;
             this.dropEl.current.muted = value;
         }
         playPick = async (silent) => {
             try {
               await this.pickEl.current.play();
             } catch (e) {
               console.log(e);
             }
         };
         playDrop = async silent => {
             try {
               await this.dropEl.current.play();
             } catch (e) {
               console.log(e);
             }
         };
         render() {
           return <div>
               <audio muted ref={this.pickEl} src="/assets/audio/pick.mp3" type="audio/mp3" />
               <audio muted ref={this.dropEl} src="/assets/audio/drop.mp3" type="audio/mp3" />

               <Provider value={this.methods}>
                 {this.props.children}
               </Provider>
             </div>;
         }
       }
export const AudioConsumer = Consumer;
