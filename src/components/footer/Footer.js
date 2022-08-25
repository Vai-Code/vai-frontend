import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faTiktok, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='f-container'>
      <div className='f-icons'>
        <a href='https://www.instagram.com/vai.community/' target="_blank"  rel="noopener noreferrer"><div className='f-icon'><i><FontAwesomeIcon icon={faInstagram}/></i></div></a>
        <a href='https://www.tiktok.com/@vai.community' target="_blank"  rel="noopener noreferrer"><div className='f-icon'><i><FontAwesomeIcon icon={faTiktok}/></i></div></a>
        <a href='https://www.linkedin.com/company/vai-community/' target="_blank"  rel="noopener noreferrer"><div className='f-icon'><i><FontAwesomeIcon icon={faLinkedinIn}/></i></div></a>
      </div>
      <div className='f-text'>
       Copyright © 2022 VAI Community
      </div>
    </div>
  )
}

export default Footer