import React, { useState } from 'react';
import './clockItems.css';
import  Option  from '../Option';
import ShowClock from '../ShowClock';
import Buttons from '../Buttons';
import { useCountdownTimer } from 'use-countdown-timer';


function ClockItems() { 
  const [breakNumber, setBreakNumber] = useState(0);
  const [sessionTime, setSessionTime] = useState(25);
  const increase = (fnx, value) =>{ 
        return (value >= 0) ? fnx(value+1) : null; 
  }
  const decrease = (fnx, value)=>{
        return  (value > 0) ? fnx(value-1) : null;
  }

    const { countdown, start, reset, pause, isRunning } = useCountdownTimer({
      timer: 1000 * 60,
    });

  return (
    <article>
           <div className='options_container'>
                <Option 
                        value={breakNumber} 
                        title="Break number"                        
                        actions={[decrease, increase]}
                        params= {setBreakNumber}                        
                />

                <Option 
                        value={sessionTime} 
                        title="Session longer"                        
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