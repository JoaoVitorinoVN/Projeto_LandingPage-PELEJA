import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "./Carrossel.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const carrosselData = [
  {
    imagem:
      "https://files.polen.app.br/stores/sclagro/storeLogo/sclagro-store-logo.png",
    nome: "Probem",
    texto:
      "A Probem é uma marca de ração animal que atua no mercado há mais de 20 anos. Com uma linha de produtos que atende a todas as necessidades nutricionais de animais de pequeno, médio e grande porte.",
  },
];

export default () => {
  return (
    <Swiper className="carrossel"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="card-carrossel">
        <div className="carrossel-item">
          <img src={carrosselData[0].imagem} className="carrossel-imagem" />
          <h4>{carrosselData[0].nome}</h4>
          <p>{carrosselData[0].texto}</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="card-carrossel">
        <div className="carrossel-item">
          <img src={carrosselData[0].imagem} className="carrossel-imagem" />
          <h4>{carrosselData[0].nome}</h4>
          <p>{carrosselData[0].texto}</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="card-carrossel">
        <div className="carrossel-item">
          <img src={carrosselData[0].imagem} className="carrossel-imagem" />
          <h4>{carrosselData[0].nome}</h4>
          <p>{carrosselData[0].texto}</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="card-carrossel">
        <div className="carrossel-item">
          <img src={carrosselData[0].imagem} className="carrossel-imagem" />
          <h4>{carrosselData[0].nome}</h4>
          <p>{carrosselData[0].texto}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};