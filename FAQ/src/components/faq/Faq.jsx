import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './Faq.css';

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
          <FaAngleDown
            style={{
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          />
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

const Faq = () => {
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <FaqItem
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Faq;