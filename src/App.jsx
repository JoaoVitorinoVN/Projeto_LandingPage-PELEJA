import React from 'react'

import SecaoProvaSocial from './components/secoes/secaoProvaSocial/SecaoProvaSocial.jsx'
import SecaoChamada from './components/secoes/secaoChamada/SecaoChamada.jsx'
import Header from './components/header/Header.jsx'
import './css/Styles.css'
import Whatsapp from './components/whatsapp/Whatsapp.jsx'
import SecaoFormulario from './components/secoes/secaoFormulario/SecaoFormulario.jsx'
import Autoridade from './components/secoes/section_autoridade/Autoridade.jsx'
import Marcas from './components/secoes/section_marcas/Marcas.jsx'
import Footer from './components/footer/Footer.jsx'



function App() {

  return (
    <>
      <Header />
      <SecaoChamada />
      <Autoridade />
      <Marcas />
      <SecaoProvaSocial />
      <SecaoFormulario />
      <Footer />
      <Whatsapp />
    </>

  )
}

export default App
