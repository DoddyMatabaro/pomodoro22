import React, { useState, useEffect } from 'react';
import './clockItems.css';
import  Option  from '../Option';
import ShowClock from '../ShowClock';
import Buttons from '../Buttons';
import { useCountdownTimer } from 'use-countdown-timer';
import UIFx from 'uifx'
import bip from '../assets/kichen1.wav';

function ClockItems() { 
  const [breakNumber, setBreakNumber] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [itBreak, setItBreak] = useState(false);
  const increase = (fnx, value, isBreak ) =>{ 
        return (value >= 0 && value < 60) ? 
            ((isBreak && value < 60)? fnx(value+1) : fnx(value+1) ) : null; 
  }
  
  const decrease = (fnx, value)=>{
        return  (value > 0  ) ? fnx(value-1) : null;
  }
  
      const alarm = new UIFx(
        bip,{
            volume: 0.8,
            throttleMs: 100
        }
    )
    const { countdown, start, reset, pause, isRunning } = useCountdownTimer({
      timer: 1000 * 60 * (itBreak ? breakNumber :sessionTime ),
      onExpire:()=>{   
          setItBreak(!itBreak); 
          reset();     
          start();
      },
    });
  
    useEffect(() => {
        if(countdown<=10){
          alarm.play();
        } 
    });
  return (
    <article>
           <div className='options_container'>
                      <Option 
                        value={breakNumber} 
                        title="Break Length"                        
                        actions={[decrease, increase]}
                        break={true}
                        params= {setBreakNumber}                        
                />

                <Option 
                        value={sessionTime} 
                        title="Session Length"                        
                        actions={[decrease, increase]}
                        params= {setSessionTime}                        
                />    
           </div>
           <ShowClock value={countdown} />
           <Buttons state={isRunning} actions={[start, reset, pause]}/>
    </article>
  )
}

export default ClockItems