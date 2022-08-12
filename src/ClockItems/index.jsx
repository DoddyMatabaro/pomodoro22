import React, { useState } from 'react';
import './clockItems.css';
import  Option  from '../Option';

function ClockItems() {
 
  const [breakNumber, setBreakNumber] = useState(0);
  const [sessionTime, setSessionTime] = useState(25);
  const increase = (fnx, value) =>{ 
        return (value >= 0) ? fnx(value+1) : null; 
  }
  const decrease = (fnx, value)=>{
        return  (value > 0) ? fnx(value-1) : null;
  }

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
    </article>
  )
}

export default ClockItems