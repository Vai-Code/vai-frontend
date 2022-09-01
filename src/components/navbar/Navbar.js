import React from 'react'
import "./Navbar.css"
import { MenuItems } from './MenuItems'
import Logo from "../../images/logo.png"
import { Link } from 'react-scroll'
import { click } from '@testing-library/user-event/dist/click'

const Navbar = () => {
  let togglear = () => {
    //const burger = document.getElementById('burger');
    const navb = document.getElementById('wrapper');
    navb.classList.toggle('expand')
  }
  let clickLink = () => {
    //const burger = document.getElementById('burger');
    const navb = document.getElementById('wrapper');
    navb.classList.remove('expand')
  }
  return (
    <div className='n-container'>
      <div className='n-wrapper' id='wrapper'>
        <div className='n-left'>
        <label htmlFor="check">
          <input onClick={togglear}  type="checkbox" id="check"/> 
          <span></span>
          <span></span>
          <span></span>
        </label>
          <Link to="Intro" spy={true} smooth={true} offset={-160} duration={700}><img className="n-logo" src={Logo}></img></Link>
        </div>
        <div className='n-right'>
          <div className='n-list'>
            <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link onClick={clickLink} className={item.cName} to={item.url} spy={true} smooth={true} offset={-160} duration={700}>{item.Title}</Link>
                  
                </li>
              );
            })}
            </ul>
          </div>
        
        </div>
        
      </div>
    </div>
  )
}

export default Navbar