import React from 'react'
import "./Intro.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faTiktok, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

const Intro = () => {
  return (
    <div className='i-container' id='Intro'>
        <div className='i-left'>
            <p>Somos una comunidad con un mundo lleno de <span className='i-historias'>historias</span>.</p>
        </div>
        <div className='i-right'>
            <div className='i-icons'>
                <a href='https://www.instagram.com/vai.community/' target="_blank"  rel="noopener noreferrer"><div className='i-icon'><i><FontAwesomeIcon icon={faInstagram}/></i></div></a>
                <a href='https://www.tiktok.com/@vai.community' target="_blank"  rel="noopener noreferrer"><div className='i-icon'><i><FontAwesomeIcon icon={faTiktok}/></i></div></a>
                <a href='https://www.linkedin.com/company/vai-community/' target="_blank"  rel="noopener noreferrer"><div className='i-icon'><i><FontAwesomeIcon icon={faLinkedinIn}/></i></div></a>
            </div>
        </div>
    </div>
  )
}

export default Intro