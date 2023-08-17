import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

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

    const slidesViewCount = () => {
        if(window.innerWidth > 1280) {
            return 2
        } else {
            return 1
        }
    }
    return(
        <div className="container">
            <h2 className="slider__title">Популярные изделия</h2>
            <Swiper
                slidesPerView={slidesViewCount()}
                spaceBetween={0}
                loop={true}
                centeredSlides={true}
                autoplay={{
                delay: 3500, //3500
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to={`/catalog/${233}`}>
                        {/* <img className="slider__photo" alt="sliderPhoto"  src={photo233}/>
                        <div className="slider__descr">Пирожное "Тирамису"</div> */}
                        <div className="slider-block">
                            <figure className="slider-wrapper">
                                <img className="slider__photo" alt="sliderPhoto"  src={photo233}/>
                                <figcaption>
                                    <h3>Пирожное "Тирамису"</h3>
                                </figcaption>			
                            </figure>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/catalog/${77}`}>
                        {/* <img className="slider__photo" alt="sliderPhoto"  src={photo77}/>
                        <div className="slider__descr">Кольцо с творожной начинкой</div> */}
                        <div className="slider-block">
                            <figure className="slider-wrapper">
                                <img className="slider__photo" alt="sliderPhoto"  src={photo77}/>
                                <figcaption>
                                    <h3>Кольцо с творожной начинкой</h3>
                                </figcaption>			
                            </figure>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/catalog/${62}`}>
                        {/* <img className="slider__photo" alt="sliderPhoto"  src={photo62}/>
                        <div className="slider__descr">"Творожный с изюмом"</div> */}
                        <div className="slider-block">
                            <figure className="slider-wrapper">
                                <img className="slider__photo" alt="sliderPhoto"  src={photo62}/>
                                <figcaption>
                                    <h3>"Творожный с изюмом"</h3>
                                </figcaption>			
                            </figure>
                        </div>                        
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/catalog/${73}`}>
                        {/* <img className="slider__photo" alt="sliderPhoto"  src={photo73}/>
                        <div className="slider__descr">"Язык с сахаром"</div> */}
                        <div className="slider-block">
                            <figure className="slider-wrapper">
                                <img className="slider__photo" alt="sliderPhoto"  src={photo73}/>
                                <figcaption>
                                    <h3>"Язык с сахаром"</h3>
                                </figcaption>			
                            </figure>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/catalog/${300}`}>
                        {/* <img className="slider__photo" alt="sliderPhoto"  src={photo300}/>
                        <div className="slider__descr">"Безе воздушное"</div> */}
                        <div className="slider-block">
                            <figure className="slider-wrapper">
                                <img className="slider__photo" alt="sliderPhoto"  src={photo300}/>
                                <figcaption>
                                    <h3>"Безе воздушное"</h3>
                                </figcaption>			
                            </figure>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/catalog/${127}`}>
                        {/* <img className="slider__photo" alt="sliderPhoto"  src={photo127}/>
                        <div className="slider__descr">"Рогалик с варёной сгущенкой"</div> */}
                        <div className="slider-block">
                            <figure className="slider-wrapper">
                                <img className="slider__photo" alt="sliderPhoto"  src={photo127}/>
                                <figcaption>
                                    <h3>"Рогалик с варёной сгущенкой"</h3>
                                </figcaption>			
                            </figure>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Slider