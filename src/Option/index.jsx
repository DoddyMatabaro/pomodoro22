import React from 'react'
import { FaArrowUp, FaArrowDown} from 'react-icons/fa';
import './option.css'

function Option(props) {
  return (
    <div className='option_container'>
        <h3 className="option_title">{props.title}</h3>
        <div className='option_details'  onClick={()=>props.actions}>
            <FaArrowUp onClick={()=>props.actions[1](props.params, props.value)}/>
                <h2>{props.value}</h2>
            <FaArrowDown onClick={()=>props.actions[0](props.params, props.value)} />
        </div>
    </div>
  )
}

export default Option