import React from 'react';
export default function Header({ maxTime }) {
                 const styles = { animationDuration: `${maxTime}s` };
                 return <div className="header">
                     <img className="logo" src="/assets/images/logo.svg" alt="logo" />
                     <div>
                       <div className="progress-bar">
                         <div className="progress" style={styles} />
                       </div>
                     </div>
                   </div>;
               }
