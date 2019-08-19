import { DEFAULT_SETTING, GAME_SETTING } from "../utils/constants";
import React, { useRef, useState } from "react";
import { getItemObject, setItemObject } from "../utils/storage";

export const AudioContext = React.createContext(function() {
  return new Error("used AudioConsumer without a AudioProvider");
});

function fetchGameSetting() {
  return getItemObject(GAME_SETTING) || DEFAULT_SETTING;
}
function playSound(el) {
  return function() {
    try {
      el.current
        .play()
        .then(r => console.log("played:", r))
        .catch(r => console.log("error while playing sound:", r));
    } catch (e) {
      console.log("error while playing sound:", e);
    }
  };
}
function useAudio() {
  const setting = fetchGameSetting();
  const dropElRef = useRef();
  const pickElRef = useRef();
  const playPick = playSound(pickElRef);
  const playDrop = playSound(dropElRef);

  const [state, setState] = useState({
    muted: setting.muted,
    methods: {
      playPick: playPick,
      playDrop: playDrop,
      mute: mute
    }
  });
  function mute(muted = true) {
    setState({ ...state, muted });
    const setting = fetchGameSetting();
    setting.muted = muted;
    setItemObject(GAME_SETTING, setting);
  }
  return [state, dropElRef, pickElRef];
}
export function AudioProvider(props) {
  const [state, dropElRef, pickElRef] = useAudio();

  const _props = state.muted ? { muted: true } : {};
  return (
    <div>
      <audio
        {..._props}
        ref={pickElRef}
        src="/assets/audio/pick.mp3"
        type="audio/mp3"
      />
      <audio
        {..._props}
        ref={dropElRef}
        src="/assets/audio/drop.mp3"
        type="audio/mp3"
      />
      <AudioContext.Provider value={state}>
        {props.children}
      </AudioContext.Provider>
    </div>
  );
}
