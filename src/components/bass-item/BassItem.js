import React from 'react'
import "./BassItem.css"

const BassItem = (props) => {
  return (
    <div className='b-i-container'>
        <div className='b-i-container-letter'>
            {props.letter}
        </div>
        <div className='b-i-container-text'>
            {props.text}
        </div>
    </div>
  )
}

export default BassItem