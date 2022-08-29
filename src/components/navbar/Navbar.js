import React from 'react'
import "./Navbar.css"
import { MenuItems } from './MenuItems'

const Navbar = () => {
  return (
    <div className='n-container'>
      <div className='n-wrapper'>
        <div className='n-left'>
          <span className="burger">X</span>
          <div className='n-logo'></div>
        </div>
        <div className='n-right'>
          <div className='n-list'>
            <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.Title}
                  </a>
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