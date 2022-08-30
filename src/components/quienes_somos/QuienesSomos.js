import React from 'react'
import "./QuienesSomos.css"
import StrongText from "../strong-text/StrongText"

const QuienesSomos = () => {
  return (
    <div className='q-container' id='QuienesSomos'>
      <div className='q-left'>
        <div className='q-left-up'>
          <div className='q-title'>¿Quiénes somos?</div>
        </div>
        <div className='q-left-down'>
        </div>

      </div>
      <div className='q-right'>
        <div className='q-right-text'>
          <p className='q-right-text-title'>Una solución <br></br> <span className='t-black'>práctica, segura, asequible y accesible</span></p>
          <p className='q-right-text-paragraph'>
            <div className='first-p'>Somos una plataforma de movilidad digital que implementa un nuevo método de <span>carpooling privado</span>  y exclusivo para cada comunidad.</div>
            <br></br>
            <div className='second-p'>Estamos enfocados en  <span>aumentar el bienestar</span>  de las comunidades universitarias y todos sus integrantes al mejorar el actual sistema de movilidad en cuanto a calidad y disponibilidad.</div></p>
        </div>
      </div>
    </div>
  )
}

export default QuienesSomos