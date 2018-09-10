import React from 'react';

import "../styles/home.css";

export default props => (
  <div class="history-wrapper">
   <div class="history-header">
    <div className="history-header-container">
      <div class="history-back-arrow">❮</div>
      <div class="history-header-title">History</div>
      <div></div>
    </div>
   </div>
   <div class="history-content">
     <div class="history-content-container">
      <div class="history-date">Today</div>

      <div class="history-result-wrapper">
        <div class="history-result">
          <div class="history-time">10:30pm</div>
          <div class="history-score"><b class="score">1280</b> score</div>          
          <div class="history-level">Level <b class="score">2</b></div>          
        </div>

        <div class="history-result">
          <div class="history-time">10:30pm</div>
          <div class="history-score"><b class="score">1280</b> score</div>          
          <div class="history-level">Level <b class="score">2</b></div>          
        </div>

        <div class="history-result">
          <div class="history-time">10:30pm</div>
          <div class="history-score"><b class="score">1280</b> score</div>          
          <div class="history-level">Level <b class="score">2</b></div>          
        </div>
      </div>
      <div class="history-date">Today</div>      
     </div>
   </div>
  </div>
);