import React from 'react';
import Header from '../src/components/header/Header';
import Carrossel from '../src/components/carrossel/Carrossel';
import styles from './App.module.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Whatsapp from './components/whatsapp/Whatsapp';

export default function App() {
  return (
    <div className={styles.mainContainer}>
      <Header
        tituloPrincipal="Para pessoas exigentes: PELEJA!"
        tituloSecundario="Venha conhecer nossos segmentos representados!"
      />
      <Carrossel />
      <Whatsapp />
    </div>
  );
}
