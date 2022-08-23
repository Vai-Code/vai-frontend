import React from 'react'
import "./QuienesSomos.css"
import celular from "../../images/celular.png"

const QuienesSomos = () => {
  return (
    <div className='q-container' id='QuienesSomos'>
      <div className='q-left'>
        <p className='q-title'>¿Quiénes somos?</p>
        <img className='q-left-image' src={celular}/>
      </div>
      <div className='q-right'>
        <div className='q-right-text'>
          <p className='q-right-text-title'>Una solución práctica, segura, asequible y accesible</p>
          <p className='q-right-text-paragraph'>
            <div className='first-p'>Somos una plataforma de movilidad digital que implementa un nuevo método de <span className='text-strong'> carpooling privado </span> y exclusivo para cada comunidad.</div>
            <br></br><br></br>
            <div>Estamos enfocados en  <span className='text-strong'>aumentar el  bienestar</span>  de las comunidades universitarias y todos sus integrantes al mejorar el actual sistema de movilidad en cuanto a calidad y disponibilidad.</div></p>
        </div>
      </div>
    </div>
  )
}

export default QuienesSomos