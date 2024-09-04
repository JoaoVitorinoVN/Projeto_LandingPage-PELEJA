import React from 'react'

import SecaoProvaSocial from './components/secoes/secaoProvaSocial/SecaoProvaSocial.jsx'
import SecaoChamada from './components/secoes/secaoChamada/SecaoChamada.jsx'
import Header from './components/header/Header.jsx'
import './css/Styles.css'
import Whatsapp from './components/whatsapp/Whatsapp.jsx'
import SecaoFormulario from './components/secoes/secaoFormulario/SecaoFormulario.jsx'
import Autoridade from './components/secoes/section_autoridade/Autoridade.jsx'
import Marcas from './components/secoes/section_marcas/Marcas.jsx'
import Faq from './components/secoes/secaoFAQ/Faq.jsx'
import Footer from './components/footer/Footer.jsx'
import WaveTop from './components/ondas/WaveTop.jsx'
import WaveBottom from './components/ondas/WaveBottom.jsx'
import WithAnimation from './components/animation/WithAnimation.jsx'
import Segmentos  from './components/secoes/secaoSegmentos/Segmentos.jsx'

function App() {

  const AnimatedWaveBottom = WithAnimation(WaveBottom);

  return (
    <>
      <Header />
      <SecaoChamada />
      <Autoridade />
      <Segmentos />
      <Marcas />
      <AnimatedWaveBottom color="brown" />
      <SecaoProvaSocial />
      <WaveBottom color="yellow" />
      <Faq />
      <WaveTop color="yellow" />
      <SecaoFormulario />
      <AnimatedWaveBottom color="black" />
      <Footer />
      <Whatsapp />
    </>

  )
}

export default App
