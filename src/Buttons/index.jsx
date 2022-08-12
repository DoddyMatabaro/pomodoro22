import React from 'react'
import { FaPlay, FaPause} from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr'
import './buttons.css'

function Buttons(props) {
  return (
    <div className='buttons_container'>
        {props.state ? (
                <FaPause onClick={props.actions[2]} />
            ):(
                <FaPlay onClick={props.actions[0]} />
            )}
        <GrPowerReset onClick={props.actions[1]} />
    </div>
  )
}

export default Buttons