import React from 'react';

import Slider from '../../swiper/Slider';
import Reasons from '../../reasons/Reasons';
import Holidays from '../../holidays/Holidays';
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';
import promoImg from '../../../resources/img/main_page/promo_img.png';

import './mainPage.scss';
import './mainPage-media.scss';

const MainPage = () => {

    return(
        <>
            <div className="promo">
                <div className="container">
                    <div className="promo-block">
                        <div className="promo__img">
                            <img src={promoImg} alt="promoImg" />
                        </div>
                        <div className="promo__wrapper">
                            <h1 className="promo__title">ИП Курушин А.О</h1>
                            <p className="promo__since">— 2001 —</p>
                            <p className="promo__descr">Откройте дверь в мир вкусовой гармонии, чтобы сделать каждый день незабываемым</p>
                        </div>
                    </div>
                </div>
            </div>
            <ErrorBoundary>
                <Slider/>
            </ErrorBoundary>
            
            <Reasons/>
            
            <Holidays/>
        </>
    )
}
export default MainPage;