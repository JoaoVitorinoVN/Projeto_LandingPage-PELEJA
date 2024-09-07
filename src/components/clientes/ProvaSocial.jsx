import React, { useState, useEffect } from 'react';
import './provaSocial.css';
import info from './info.json';
import {Swiper, SwiperSlide} from 'swiper/react';




function ProvaSocial() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const[sliderPerView, setSliderPerView] = useState();

    useEffect(() => {
        function handleResize(){
            if(window.innerWidth < 720) {
                setSliderPerView(1);
            } else if(window.innerWidth < 900) {
                setSliderPerView(2)
            } else {
                setSliderPerView(3)
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, []);



    useEffect(() => {
        try {
            if (info && info.depoimentos) {
                setData(info.depoimentos);
            } else {
                throw new Error('Dados não encontrados');
            }
        } catch (err) {
            setError(err);
        }
    }, []); 

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (data.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className='prova-social'>
            <Swiper
            pagination={{clickable:true}}
            slidesPerView={sliderPerView}
            navigation
            className='slider'
            >
            {data.map((item, index) => (
                <SwiperSlide key={index} className='slide'>
                <div className='box-prova'>
                    <div className='fotoCliente'>
                        <img src={item['foto-cliente']} alt="Cliente" />
                    </div>
                    <p>
                        {item['prova-social']}
                    </p>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
}

export default ProvaSocial;
