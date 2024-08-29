import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Carrossel.module.css';

// Importe as imagens diretamente
import foodImg from '../../assets/food.jpg';
import petsImg from '../../assets/pets.jpg';
import supermarketImg from '../../assets/supermarket.jpg';

function Carrossel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
    },
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

  return (
    <section>
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className={styles.carouselItem}>
            <div className={styles.carouselImageContainer}>
              <img src={d.img} alt={d.name} className={styles.carouselImage} />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
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
