import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Segmentos.module.css';
import AnimatedTitles from '../../animation/AnimatedTitles';
import segmentosData from '../../../assets/segmentos.json';

function Carrossel() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(segmentosData);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar o JSON:', error);
      setError(error);
      setLoading(false);
    }
  }, []);

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

  const titulos = {
    titulo: 'Para pessoas exigentes: PELEJA!',
    subtitulo: 'Venha conhecer nossos segmentos representados!'
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className={styles.sectionSegmentos} id='segmentos'>
      <AnimatedTitles titulos={titulos} />
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className={styles.carouselItem}>
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