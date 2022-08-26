import React from 'react'
import "./QuienesSomos.css"
import StrongText from "../strong-text/StrongText"

const QuienesSomos = () => {
  return (
    <div className='q-container' id='QuienesSomos'>
      <div className='q-left'>
        <div className='q-left-up'>
          <span className='q-title'>¿Quiénes somos?</span>
        </div>
        <div className='q-left-down'>
        </div>

      </div>
      <div className='q-right'>
        <div className='q-right-text'>
          <p className='q-right-text-title'>Una solución práctica, segura, asequible y accesible</p>
          <p className='q-right-text-paragraph'>
            <div className='first-p'>Somos una plataforma de movilidad digital que implementa un nuevo método de <StrongText text="carpooling privado" color="white" backgroundColor="#333333"/>  y exclusivo para cada comunidad.</div>
            <br></br>
            <div className='second-p'>Estamos enfocados en  <StrongText text="aumentar el bienestar" color="white" backgroundColor="#333333"/>  de las comunidades universitarias y todos sus integrantes al mejorar el actual sistema de movilidad en cuanto a calidad y disponibilidad.</div></p>
        </div>
      </div>
    </div>
  )
}

export default QuienesSomos