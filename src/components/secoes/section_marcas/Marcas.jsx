import React from "react";
import TituloSubtituloSecao from "../../titulos/TituloSubtituloSecao";
import "./Marcas.css";
import Carrossel from "./carrossel/Carrossel";
import AnimatedTitles from "../../animation/AnimatedTitles";

const titulos = {titulo: 'Nossas Marcas', subtitulo: 'Conheça as marcas que representamos'}

function Marcas() {
  return (
    <section className="section-marcas" id="marcas">
      <div>
        <AnimatedTitles titulos={titulos}/>

        <div className="carrossel-marcas-container">
            <Carrossel/>
        </div>
      </div>
    </section>
  );
}
export default Marcas;
