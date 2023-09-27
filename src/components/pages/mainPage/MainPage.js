import React from 'react';
import {Helmet} from 'react-helmet';

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
            <Helmet>
                <meta name="Кондитерская фабрика" content="Кондитерская фабрика 'ИП Курушин А.О' занимается производством кондитерских изделий высокого качества уже много лет. 
                Вкусные торты, кексы, печенье изготавливают опытные кондитеры, вкладывая свой опыт и любовь в каждое изделие "/>

                <meta name="keywords" content="Кондитерская фабрика, Кондитерские изделия на заказ, Оптовые продажи кондитерских изделий, 
                Уникальные сладости на заказ, Производство кондитерских изделий, Кондитерская продукция, Оптовые поставки кондитерских товаров, 
                Индивидуальный подход к заказам, Высокое качество и вкус, Разнообразие вкусов и форм, Гарантированная свежесть, 
                Безопасность и стандарты качества, Удовлетворение потребительских потребностей, Вкусная выпечка на заказ, Десерты на заказ, Торты на заказ,
                Кексы на заказ, Печенье на заказ" />

                <title>Кондитерская Фабрика "ИП Курушин А.О."</title>
            </Helmet>
            
            <div className="promo">
                <div className="container">
                    <div className="promo-block">
                        <div className="promo-block__img">
                            <img src={promoImg} alt="promoImg" />
                        </div>
                        <div className="promo-block-wrapper">
                            <h1 className="promo-block__title">Кондитерская фабрика "ИП Курушин А.О"</h1>
                            <p className="promo-block__since">— 2001 —</p>
                            <p className="promo-block__descr">Откройте дверь в мир вкусовой гармонии, чтобы сделать каждый день незабываемым</p>
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