import css from "../styles/settings.scss";

import React from "react";

import RouterLink from "next/link";
import { AudioContext } from "../components/AudioManager";
import ReactGA from "../utils/ga";
import Switch from "../components/Switch";
export default function() {
  const { methods, muted = true } = {}; //useContext(AudioContext);
  // TODO add logic for sounds
  function toggleSound(value){
    ReactGA.event({
      action: "click",
      category: "Buttons",
      label: `Volume ${muted ? "-" : "+"}`
    });
    // methods.mute(value);
  }
  function clearHistoryHandler() {
    // TODO add logic clear history
    ReactGA.event({
      action: "click",
      category: "Buttons",
      label: `Clear History`
    });
  }
  return (
    <div className={css["settings-wrapper"]}>
      <div className={css["settings-header"]}>
        <div className={css["settings-header-container"]}>
          <div className={css["settings-header-inner"]}>
            <RouterLink href="/">
              <div className={css["settings-back-arrow"]}>❮</div>
            </RouterLink>
            <div className={css["settings-header-title"]}>Settings</div>
          </div>
        </div>

        <div className={css["settings-content-container"]}>
          <div className={css["settings-content"]}>
            <div className={css["settings-list"]}>
              <div className={css["settings-list-item"]}>
                <img
                  className={css["settings-list-item-icon"]}
                  src="/static/assets/images/icon-volume.svg"
                  alt="volume"
                />
                <div className={css["settings-list-item-title"]}>Volume</div>
                <Switch
                  checked={!muted}
                  onChange={toggleSound}
                />
              </div>
            </div>
          </div>
          <div className={css["settings-content"]}>
            <div className={css["settings-list"]}>
              <div className={css["settings-list-item"]}>
                <div
                  style={{ color: "steelblue" }}
                  onClick={clearHistoryHandler}
                  className={css["settings-list-item-title"]}
                >
                  Clear History
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
