import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carrossel.css";
import carrosselData from "./carrosselData";

export default () => {
  return (
    <Swiper
      className="carrossel"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerGroup={1}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
    >
      <div className="carrossel-wrapper">
        {carrosselData.map((item, index) => (
          <SwiperSlide className="card-carrossel" key={index}>
            <div className="carrossel-item">
              <img src={item.imagem} className="carrossel-imagem" alt={item.nome} />
              <h4>{item.nome}</h4>
              <p>{item.texto}</p>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
