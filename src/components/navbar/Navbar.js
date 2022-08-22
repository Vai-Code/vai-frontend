import React from 'react'
import "./Navbar.css"
import { Anchor } from 'antd';

const { Link } = Anchor;


const Navbar = () => {
  return (
    <Anchor>
    <div className='n-container'>
      <div className='n-wrapper'>
        <div className='n-left'>
        <a href="#Intro"><div className='n-logo'></div></a>
        </div>
        <div className='n-right'>
          <div className='n-list'>
            <ul>
              <li>¿Quiénes somos?</li>
              <li> Únete</li>
              <li> Beneficios </li>
              <li> Modelo BASS</li>
              <li>Contáctanos</li>
            </ul>
          </div>
        </div>
        
  
      </div>
    </div>
    </Anchor>
  )
}

export default Navbar