import React from 'react';
import './showClock.css';

function ShowClock(props) {
  return (
    <div className='clock_container'>
        <h1>
            {Math.trunc((props.value / 60 ) / 1000)} : 
            {(props.value - (Math.trunc((props.value / 60 ) / 1000)*60000))/1000}  
            
            
        </h1>
    </div>
  )
}

export default ShowClock