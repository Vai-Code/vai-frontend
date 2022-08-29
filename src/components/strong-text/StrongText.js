import React from 'react'

const StrongText = (props) => {

  const myStyle = {
    color: "#333333",
    width: "fit-content",
    border: "5px solid white",
    borderRadius: "30px",
    padding: "5px"
  }


  return (
        <span style={myStyle}>{props.text}</span>
  )
}

export default StrongText