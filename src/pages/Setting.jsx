import "../styles/settings.scss";

import React, { useContext } from "react";

import { AudioContext } from "../Components/AudioManager";
import ReactGA from "../utils/ga";
import Switch from "../Components/Switch";
import { clearStats } from "../utils/game";

export default function({ history }) {
  const { methods, muted } = useContext(AudioContext);
  return (
    <div className="settings-wrapper">
      <div className="settings-header">
        <div className="settings-header-container">
          <div className="settings-header-inner">
            <div
              className="settings-back-arrow"
              onClick={() => history.replace("/")}
            >
              ❮
            </div>
            <div className="settings-header-title">Settings</div>
          </div>
        </div>

        <div className="settings-content-container">
          <div className="settings-content">
            <div className="settings-list">
              <div className="settings-list-item">
                <img
                  className="settings-list-item-icon"
                  src="/assets/images/icon-volume.svg"
                  alt="volume"
                />
                <div className="settings-list-item-title">Volume</div>
                <Switch
                  checked={!muted}
                  onChange={value => {
                    ReactGA.event({
                      action: "click",
                      category: "Buttons",
                      label: `Volume ${muted?'-':'+'}`
                    });
                    methods.mute(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="settings-content">
            <div className="settings-list">
              <div className="settings-list-item">
                <div
                  style={{ color: "steelblue" }}
                  onClick={e => {
                    clearStats();
                    history.replace("/");
                    ReactGA.event({
                      action: "click",
                      category: "Buttons",
                      label: `Clear History`
                    });
                  }}
                  className="settings-list-item-title"
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
