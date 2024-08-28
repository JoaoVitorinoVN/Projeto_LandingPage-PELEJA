import React from 'react'
import TituloSubtituloSecao from '../../titulos/TituloSubtituloSecao'
import ProvaSocial from '../../clientes/ProvaSocial'
import './secaoProvaSocial.css'
import Wave from '../../ondas/Wave'
import WaveProvaSocialBottom from '../../ondas/WaveProvaSocialBottom'

function SecaoProvaSocial() {

  const titulos = { titulo: "Para clientes exigentes: PELEJA!", subtitulo: "Venha conhecer alguns dos nossos produtos mais vendidos!" }

  return (
    <div className='div-pai-prova-social'>
     <Wave />
      <section className='secao-prova-social'>
      
        <div>
          <TituloSubtituloSecao titulos={titulos} />

          <ProvaSocial />
        </div>

        
      </section>

      <WaveProvaSocialBottom />
     

    </div>
  )
}

export default SecaoProvaSocial