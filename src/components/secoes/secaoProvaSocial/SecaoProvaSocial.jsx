import React from 'react'
import TituloSubtituloSecao from '../../titulos/TituloSubtituloSecao'
import ProvaSocial from '../../clientes/ProvaSocial'
import './secaoProvaSocial.css'

function SecaoProvaSocial() {

  const titulos = { titulo: "Para clientes exigentes: PELEJA!", subtitulo: "Venha conhecer alguns dos nossos produtos mais vendidos!" }

  return (
      <section className='secao-prova-social'>
      
        <div>
          <TituloSubtituloSecao titulos={titulos} />
          <ProvaSocial />
        </div>
        </section>
  )
}

export default SecaoProvaSocial