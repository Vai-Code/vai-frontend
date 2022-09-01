import React from 'react';
import './beneficios.scss';
import beneficios from '../../images/beneficios-sin-fondo.png';
import logo from '../../images/logo.png';

export default function Beneficios() {
  return (
    <div className='B-container' id='Beneficios'>
        <div className='b-title'>Beneficios</div>
        <div className='contenedor'>
            <div className='texto'><img src={logo}></img>, donde cada recorrido es una oportunidad para</div>
            <div className='left'>
                <img src={beneficios}></img>
            </div>

        </div>
    </div>
  )
}
