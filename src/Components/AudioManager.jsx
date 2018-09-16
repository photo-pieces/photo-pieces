import React from "react";
import { getItemObject, setItemObject } from "../utils/storage";
import { GAME_SETTING, DEFAULT_SETTING } from "../utils/constants";
const { Provider, Consumer } = React.createContext();

function fetchGameSetting(){
  return getItemObject(GAME_SETTING) || DEFAULT_SETTING;
}
export class AudioProvider extends React.Component {
         constructor(props) {
           super(props);
           const setting = fetchGameSetting();
           this.state = { muted: setting.muted, methods: { playPick: this.playPick, playDrop: this.playDrop, mute: this.mute } };
         }
         dropEl = React.createRef();
         pickEl = React.createRef();

         mute = (muted = true) => {
           this.setState({ muted },()=>{
             const setting = fetchGameSetting();
             setting.muted = muted;
             setItemObject(GAME_SETTING, setting);
           });
         };
         playPick = () => {
           try {
             this.pickEl.current
               .play()
               .then(r => console.log(r))
               .catch(r => console.log(r));
           } catch (e) {
             console.log(e);
           }
         };
         playDrop = () => {
           try {
             this.dropEl.current
               .play()
               .then(r => console.log(r))
               .catch(r => console.log(r));
           } catch (e) {
             console.log(e);
           }
         };
         render() {
           const props = this.state.muted ? { muted: true } : {};
           return <div>
               <audio {...props} ref={this.pickEl} src="/assets/audio/pick.mp3" type="audio/mp3" />
               <audio {...props} ref={this.dropEl} src="/assets/audio/drop.mp3" type="audio/mp3" />
               <Provider value={this.state}>
                 {this.props.children}
               </Provider>
             </div>;
         }
       }
export const AudioConsumer = Consumer;
