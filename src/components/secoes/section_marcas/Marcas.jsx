import React from "react";
import TituloSubtituloSecao from "../titulos/TituloSubtituloSecao";
import "./Marcas.css";
import Carrossel from "./carrossel/Carrossel";

const titulos = {titulo: 'Nossas Marcas', subtitulo: 'Conheça as marcas que representamos'}

function Marcas() {
  return (
    <section>
      <div>
        <div className="box-titulo">
          <TituloSubtituloSecao titulos={titulos}/>
        </div>

        <div className="carrossel-marcas-container">
            <Carrossel/>
        </div>
      </div>
    </section>
  );
}
export default Marcas;
