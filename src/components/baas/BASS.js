import React from 'react'
import "./BASS.css"
import BassItem from '../bass-item/BassItem'
import StrongText from '../strong-text/StrongText'

const BASS = () => {
  return (
    <div className='b-container'>
        <div className='b-container-left'>
          <p>Modelo BASS</p>
          <div className="b-container-left-items">
            <BassItem letter = "B" text = "Bienestar en la comunidad"/>
            <BassItem letter = "A" text = "Accesibilidad e Inclusividad"/>
            <BassItem letter = "S" text = "Sostenibilidad"/>
            <BassItem letter = "S" text = "Seguridad"/>
          </div>
        </div>
        <div className='b-container-right'>
          <div className='b-container-right-content'>
            <p>
              Asegurar y fomentar el <StrongText text="bienestar" color="#333333" backgroundColor="white"/> y los <StrongText text="espacios seguros" color="white" backgroundColor="#333333"/> en las comunidades
            </p>
          </div>
        </div>
    </div>
  )
}

export default BASS