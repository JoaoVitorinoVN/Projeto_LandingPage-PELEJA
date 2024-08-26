import React from 'react'
import TituloSubtituloSecao from '../titulos/TituloSubtituloSecao'
import ProvaSocial from '../clientes/ProvaSocial'
import './secaoProvaSocial.css'
import Wave from '../ondas/Wave'

function SecaoProvaSocial() {

  const titulos = { titulo: "Para clientes exigentes: PELEJA!", subtitulo: "Venha conhecer alguns dos nossos produtos mais vendidos!" }

  return (
    <div>
      <Wave />
      <section className='secao-prova-social'>

        <TituloSubtituloSecao titulos={titulos} />

        <ProvaSocial />
      </section>

    </div>
  )
}

export default SecaoProvaSocial