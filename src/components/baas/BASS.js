import React from 'react'
import "./BASS.css"
import BassItem from '../bass-item/BassItem'
import StrongText from '../strong-text/StrongText'

const BASS = () => {
  return (
    <div className='' id='BASS'>
      <div className='b-title'>Modelo BASS</div>
      <div className='b-container'>
      <div className='b-container-left'>
          <div className="b-container-left-items">
            <BassItem letter = "B" text = "Bienestar en la comunidad"/>
            <BassItem letter = "A" text = "Accesibilidad e Inclusividad"/>
            <BassItem letter = "S" text = "Sostenibilidad"/>
            <BassItem letter = "S" text = "Seguridad"/>
          </div>
        </div>
        <div className='b-container-right'>
          <div className='b-container-right-content'>
            <div className='text'>
              Asegurar y fomentar el <span>bienestar</span> y los <span>espacios seguros</span> en las comunidades
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BASS