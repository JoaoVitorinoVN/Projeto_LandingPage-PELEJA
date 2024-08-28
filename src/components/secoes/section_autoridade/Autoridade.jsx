import React from 'react';
import TituloSubtituloSecao from '../../titulos/TituloSubtituloSecao';
import './Autoridade.css';
import IconItem from './IconItem';
import Carrossel from './carrossel/Carrossel';

import iconMissao from './img/icon-missao.png';
import iconValores from './img/icon-valores.png';
import iconVisao from './img/icon-visao.png';

const titulos = {titulo: 'Conheça a Peleja', subtitulo: 'Saiba um pouco sobre a nossa história'}

const items = [
    { id: 1, imgSrc: iconVisao, text: 'Compromisso com Excelência' },
    { id: 2, imgSrc: iconMissao, text: 'Colaboração' },
    { id: 3, imgSrc: iconValores, text: 'Foco no Cliente' },
];

function Autoridade() {
    return (
        <section className='sectio-autoridade'> 

        <div className='box-section'>
            <div className='box-titulo'>
                <TituloSubtituloSecao titulos={titulos}/>
            </div>

            <div className='box-info'>
                <p className='texto'>
                    A PELEJA é uma empresa de representação comercial situada em Uberlândia, dedicada a fornecer soluções inovadoras e personalizadas para o crescimento e sucesso de seus clientes. Com uma abordagem multifacetada, oferecemos atendimentos através de canais digitais, telemarketing, WhatsApp e presencial, garantindo que nossas estratégias de vendas e marketing estejam sempre alinhadas com as necessidades específicas de cada cliente.
                </p>

                <div className='container-carrossel'>
                    <Carrossel/>
                </div>
            </div>

            <div className='box-icons'>
                {items.map(item => (
                    <IconItem key={item.id} imgSrc={item.imgSrc} text={item.text} />
                ))}
            </div>
            </div>
        </section>
    );
}

export default Autoridade;
