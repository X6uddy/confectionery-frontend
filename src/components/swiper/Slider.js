import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import card1 from './img/photo1.jpg';
import card2 from './img/photo2.jpg';
import card3 from './img/photo3.jpg';
import card4 from './img/photo4.jpg';
import card5 from './img/photo5.jpg';
import card6 from './img/photo6.jpg';




const Slider = () => {
    return(
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
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Link to={`/catalog/${1}`}>
                    <img className="slider__photo" alt="sliderPhoto"  src={card1}/>
                    <div className="slider__descr">
                        descr 1
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={`/catalog/${1}`}>
                    <img className="slider__photo" alt="sliderPhoto"  src={card2}/>
                    <div className="slider__descr">
                        descr 2
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={`/catalog/${1}`}>
                    <img className="slider__photo" alt="sliderPhoto"  src={card3}/>
                    <div className="slider__descr">
                        descr 3
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={`/catalog/${1}`}>
                    <img className="slider__photo" alt="sliderPhoto"  src={card4}/>
                    <div className="slider__descr">
                        descr 4
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={`/catalog/${1}`}>
                    <img className="slider__photo" alt="sliderPhoto"  src={card5}/>
                    <div className="slider__descr">
                        descr 5
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={`/catalog/${1}`}>
                    <img className="slider__photo" alt="sliderPhoto"  src={card6}/>
                    <div className="slider__descr">
                        descr 6
                    </div>
                </Link>
            </SwiperSlide>
        </Swiper>
    )
}
export default Slider