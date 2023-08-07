import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.scss';
import './slider_media.scss'

import photo233 from './img/233.jpg';
import photo77 from './img/77.jpg';
import photo62 from './img/62.jpg';
import photo73 from './img/73.jpg';
import photo300 from './img/300.jpg';
import photo127 from './img/127.jpg';




const Slider = () => {
    return(
        <div className="container">
            <h2 className="slider__title">Популярные изделия</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={50}
                loop={true}
                centeredSlides={true}
                autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to={`/catalog/${233}`}>
                        <img className="slider__photo" alt="sliderPhoto"  src={photo233}/>
                        <div className="slider__descr">Пирожное "Тирамису"</div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/catalog/${77}`}>
                        <img className="slider__photo" alt="sliderPhoto"  src={photo77}/>
                        <div className="slider__descr">Кольцо с творожной начинкой</div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/catalog/${62}`}>
                        <img className="slider__photo" alt="sliderPhoto"  src={photo62}/>
                        <div className="slider__descr">"Творожный с изюмом"</div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/catalog/${73}`}>
                        <img className="slider__photo" alt="sliderPhoto"  src={photo73}/>
                        <div className="slider__descr">"Язык с сахаром"</div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/catalog/${300}`}>
                        <img className="slider__photo" alt="sliderPhoto"  src={photo300}/>
                        <div className="slider__descr">"Безе воздушное"</div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/catalog/${127}`}>
                        <img className="slider__photo" alt="sliderPhoto"  src={photo127}/>
                        <div className="slider__descr">"Рогалик с варёной сгущенкой"</div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Slider