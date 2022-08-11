import React, { useState } from 'react';

import './clockItems.css';
import DateTimeDisplay from '../DateTimeDisplay';
import { useCountdown } from '../hooks/useCountdown';

const ExpiredNotice = () =>{
  return (
    <div className="expired-notice">
      <span>Expired</span>
      <p> Please select a future date and time</p>
    </div>
  );
};

const ShowCounter = ({days, hours, minutes, seconds})=>{
  return (
    <div className="show-counter ">
      <a
        href="https://www.linkedin.com/in/doddy-matabaro-0a9666211/"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};

function ClockItems() {
  const [currentDateValue, setCurrentDateValue] = useState("");
  // let targetDate = currentDateValue;
  const [days, hours, minutes, seconds] = useCountdown(currentDateValue);
      function handleChangeDate(e){
        setCurrentDateValue(e.currentTarget.value);
      }


  return (
    <article>
            <div className='clock-date'>
                <label>Date: </label>
                <input 
                    type="datetime-local"
                    onChange={(e)=>handleChangeDate(e)}
                />
           </div>
            {(days + hours + minutes + seconds <= 0) ||  isNaN(days) || isNaN(hours) || isNaN(minutes) || isNaN(seconds)  
                  ? 
                  <ExpiredNotice /> 
                  : 
                  <ShowCounter 
                      days={days}
                      hours={hours}
                      minutes={minutes}
                      seconds={seconds}
                  />
            }
    </article>
  )
}

export default ClockItems