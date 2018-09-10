import React from 'react';
import {Link} from './../Components/Buttons';
import { getStats } from "../game";

import { calculateTotalScore } from "../utils";
function groupByDate(snapshots) {
    const result={};
    snapshots.reverse();
    snapshots.forEach(({time,...rest}) => {
        const date=new Date(time);
        const dateString = date.toLocaleDateString();
        const timeString=date.toLocaleTimeString()
        const snapshot={...rest,timeString};
        if(result[dateString]){
            result[dateString].push(snapshot);
        }else{
            result[dateString] = [snapshot];
        }
    });
    return result;
}
export default function History({history}){
    const {snapshots}= getStats();
    const items=groupByDate(snapshots); 
    return <div>
        <div>
          <Link onClick={e => history.push("/history")}>Back</Link>
          <span>History</span>
        </div>
        <div>
          {Object.keys(items).map(key=>{
            return <div className="card" key={key}>
                <div className="heading" >{key}</div>
                {items[key].map((item,i)=>{
                    return <div className="games" key={i}>
                        <span>{item.timeString}</span>
                        <span>
                          {calculateTotalScore(item.levels)}
                        </span>
                        <span>
                          Level {item.levels.length}
                        </span>
                      </div>;
                })}
              </div>;
          })}
          
        </div>
      </div>;
}