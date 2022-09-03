import React from 'react';
import './Testimonios.scss';
import logo from '../../images/logo.png';

export default function Testimonios() {
  return (
    <div className='testimonios' id='Testimonios'>
        <div className="t-contenedor">
            <div className='tarjetas'>
                <div className='tarjeta'>
                    <div className="top">
                        <div className="numero">#1</div>
                        <div className="negritas">Peor tráfico</div>
                    </div>
                    <div className="bottom">
                        <div className="negritas">Ranking Latam</div>
                        <div className="azul">2021</div>
                    </div>
                    <a target="_blank" href='https://www.tomtom.com/en_gb/traffic-index/bogota-traffic/'>Tomado de: https://www.tomtom.com/en_gb/traffic-index/bogota-traffic/</a>
                </div>
                <div className='tarjeta'>
                    <div className="top">
                        <div className="numero">#4</div>
                        <div className="negritas">Peor tráfico</div>
                    </div>
                    <div className="bottom">
                        <div className="negritas">Ranking Mundial</div>
                        <div className="azul">2021</div>
                    </div>
                    <a target="_blank" href='https://www.tomtom.com/en_gb/traffic-index/bogota-traffic/'>Tomado de: https://www.tomtom.com/en_gb/traffic-index/bogota-traffic/</a>
                </div>
                <div className='tarjeta'>
                    <div className="top">
                        <div className="numero mini">126+</div>
                        <div className="negritas">hrs. anuales</div>
                    </div>
                    <div className="bottom">
                        <div className="negritas">En trancones</div>
                        <div className="negrita2">= 55% + que el promedio mundial</div>
                    </div>
                    <a target="_blank" href='https://www.tomtom.com/en_gb/traffic-index/bogota-traffic/'>Tomado de: <strong>Tomtom.com</strong></a>
                </div>
            </div>
            <div className='pie'>
                <div className='bogota'>
                    Sobre <span>Bogotá</span>
                </div>
                <div className='logo'>
                    <img alt='logo VAI' src={logo}></img>
                </div>
            </div>
        </div>

        <div className="b-azul">
            <div className='t-contenedor'>
                <div className='testimonio'>
                    <div className='texto'>
                        "Pedí un servicio de transporte y el 
                        conductor se la pasó chateando todo el camino. En 
                        una de esas, no vió el "PARE" y siguió de largo. 
                        Un carro, que llevaba la vía, tuvo que esquivarnos. 
                        Sentí mucho miedo pero no fuí capaz de decir nada, 
                        al final, el señor era un <span>completo desconocido</span>"
                    </div>
                    <div className='auto'>- Mariana</div>
                </div>
                <div className='pie2'>
                    <div className='logo'>
                        <img alt='logo VAI' src={logo}></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
