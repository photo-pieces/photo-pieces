import React from 'react';

import "../styles/settings.css";
import Switch from '../Components/Switch';

import { AudioConsumer } from "../Components/AudioManager";
export default ({ history }) => (
  <AudioConsumer>
    {({ methods,muted }) => {
      return <div className="settings-wrapper">
          <div className="settings-header">
            <div className="settings-header-container">
              <div className="settings-header-inner">
                <div className="settings-back-arrow" onClick={() => history.replace("/")}>
                  ❮
                </div>
                <div className="settings-header-title">Settings</div>
              </div>
            </div>

            <div className="settings-content-container">
              <div className="settings-content">
                <div className="settings-list">
                  <div className="settings-list-item">
                    <img className="settings-list-item-icon" src="/assets/images/icon-volume.svg" alt="volume" />
                    <div className="settings-list-item-title">Volume</div>
                    <Switch checked={!muted} onChange={value => methods.mute(value)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
    }}
  </AudioConsumer>
);