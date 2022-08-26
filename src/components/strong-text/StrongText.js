import React from 'react'

const StrongText = (props) => {

  const myStyle = {
    color: props.color,
    backgroundColor: props.backgroundColor,
    width: "fit-content",
    borderRadius: "30px",
    padding: "5px"
  }


  return (
        <span style={myStyle}>{props.text}</span>
  )
}

export default StrongText