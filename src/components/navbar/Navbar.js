import React from 'react'
import "./Navbar.css"
import Logo from "../../images/logo.png"

const Navbar = () => {
  return (
    <div className='n-container'>
      <div className='n-wrapper'>
        <div className='n-left'>
          <img src={Logo}></img>
        </div>
        <div className='n-right'>
          <div className='n-list'>
            <ul className='n-list-elements'>
              <li>¿Quiénes somos?</li>
              <li> Beneficios </li>
              <li> Modelo BASS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar