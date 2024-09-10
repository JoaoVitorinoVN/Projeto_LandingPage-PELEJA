import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Segmentos.module.css';

// Importe as imagens diretamente
import foodImg from '../../../assets/food.jpg';
import petsImg from '../../../assets/pets.jpg';
import supermarketImg from '../../../assets/supermarket.jpg';
import AnimatedTitles from '../../animation/AnimatedTitles';

function Carrossel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const data = [
    {
      name: 'Alimentos',
      img: foodImg
    },
    {
      name: 'Pets',
      img: petsImg
    },
    {
      name: 'SuperMarket',
      img: supermarketImg
    }
  ];

  const titulos = {titulo: 'Para pessoas exigentes: PELEJA!', subtitulo: 'Venha conhecer nossos segmentos representados!'}

  return (
    <section className={styles.sectionSegmentos} id='segmentos'>

      <AnimatedTitles titulos={titulos}/>

      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className={styles.carouselItem}>
              <div className={styles.carouselContent}>
                <div className={styles.carouselImageContainer}>
                  <img src={d.img} alt={d.name} className={styles.carouselImage} />
                </div>
                <button className={styles.carouselButton}>{d.name}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Carrossel;
