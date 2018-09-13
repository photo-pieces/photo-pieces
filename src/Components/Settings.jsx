import React from 'react';

import "../styles/settings.css";
import Switch from './Switch';

export default () => (
    <div class="settings-wrapper">
        <div className="settings-header">
            <div className="settings-header-container">
                <div className="settings-header-inner">
                <div className="settings-back-arrow">
                    ❮
                </div>
                <div className="settings-header-title">Settings</div>
                </div>
            </div>

            <div className="settings-content-container">
                <div className="settings-content">
                    <div className="settings-list">
                        <div className="settings-list-item">
                            <img src="/assets/images/icon-volume.svg" alt=""/>
                            <div className="settings-list-item-title">Volume</div>
                            <Switch/>
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    </div>  
);