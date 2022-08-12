import React from 'react'
import './showClock.css'

function ShowClock(props) {
  return (
    <div className='clock_container'>
        <h1>{props.value} : 00</h1>
    </div>
  )
}

export default ShowClock