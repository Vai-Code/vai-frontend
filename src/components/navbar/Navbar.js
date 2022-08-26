import React from 'react'
import "./Navbar.css"
import Logo from "../../images/logo.png"
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='n-container'>
      <div className='n-wrapper'>
        <div className='n-left'>
        <Link to="Intro" spy={true} smooth={true} offset={-160} duration={700}><img src={Logo}></img></Link>
        </div>
        <div className='n-right'>
          <div className='n-list'>
            <ul className='n-list-elements'>
              <Link to="QuienesSomos" spy={true} smooth={true} offset={-160} duration={700}><li className='n-list-elements-item'>¿Quiénes somos?</li></Link>
              <Link to="/" spy={true} smooth={true} offset={50} duration={700}><li className='n-list-elements-item'> Beneficios </li></Link>
              <Link to="BASS" spy={true} smooth={true} offset={-160} duration={700}><li className='n-list-elements-item'> Modelo BASS</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar