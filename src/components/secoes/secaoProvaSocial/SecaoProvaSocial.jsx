import React from 'react'
import ProvaSocial from '../../clientes/ProvaSocial'
import './secaoProvaSocial.css'
import AnimatedTitles from '../../animation/AnimatedTitles'

function SecaoProvaSocial() {

  const titulos = { titulo: "Para clientes exigentes: PELEJA!", subtitulo: "Venha conhecer alguns dos nossos produtos mais vendidos!" }

  return (
    <section className='secao-prova-social' id="provasocial">
      
        <div>
          <AnimatedTitles titulos={titulos}/>
          <ProvaSocial />
        </div>
        </section>
  )
}

export default SecaoProvaSocial