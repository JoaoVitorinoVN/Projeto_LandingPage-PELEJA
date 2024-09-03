import React, { useState } from 'react';
import './Faq.css';
import AnimatedTitles from '../../animation/AnimatedTitles';


const data = [
  {
    title: "O que é representação comercial?",
    content: `Representação comercial é uma atividade em que uma pessoa ou empresa, chamada representante comercial, atua como intermediária entre fabricantes ou fornecedores e seus clientes ou revendedores. A principal função do representante comercial é promover e vender produtos ou serviços de uma ou mais empresas, sem vínculo empregatício, em troca de uma comissão sobre as vendas realizadas.`
  },
  {
    title: "Onde atuamos?",
    content: `Informações sobre as áreas de atuação da empresa.`
  },
  {
    title: "O que é a Peleja?",
    content: `Descrição sobre o que é a empresa Peleja.`
  },
  {
    title: "Como comprar produtos pela Peleja?",
    content: `Informações sobre como realizar compras pela Peleja.`
  },
  {
    title: "A Peleja representa mais setores?",
    content: `Informações sobre a representação em outros setores.`
  }
];

const FaqItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <div
        className="title"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}  // Adiciona cursor pointer
      >
        <span className="title-text">{title}</span>
        <div className="arrow-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#131313"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
        </div>
      </div>
      <div
        className="content"
        style={{
          maxHeight: open ? '300px' : '0',
          opacity: open ? '1' : '0',
          transition: 'all 0.5s ease',
          overflow: 'hidden',
        }}
      >
        <div className="content-text">
          {content}
        </div>
      </div>
    </div>
  );
};

const titulos = { titulo: "Perguntas frequentes", subtitulo: "" }

const Faq = () => {
  return (

    <section className='secao-faq'>

      <div>

    <AnimatedTitles titulos={titulos}/>
    
    <div className="accordion">
      {data.map((item, index) => (
        <FaqItem
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
    <p className='p-nao-encontrou'>Não encontrou o que procurava? <a href="https://wa.me/5503499502590?text=Olá%20gostaria%20de%20mais%20informações" target="_blank">Entre em contato conosco e ficaremos felizes em ajudar!</a></p>
    </div>
    </section>
    

  );
};

export default Faq;