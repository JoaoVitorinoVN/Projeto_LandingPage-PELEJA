import React from 'react'

import SecaoProvaSocial from './components/secoes/secaoProvaSocial/SecaoProvaSocial.jsx'
import SecaoChamada from './components/secoes/secaoChamada/SecaoChamada.jsx'
import Header from './components/header/Header.jsx'
import './css/Styles.css'
import Whatsapp from './components/whatsapp/Whatsapp.jsx'


function App() {

  return (
    <>
      <Header />
      <SecaoChamada />
      <SecaoProvaSocial />
      <Whatsapp />
    </>

  )
}

export default App
