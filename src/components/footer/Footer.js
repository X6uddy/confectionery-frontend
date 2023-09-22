import React from 'react';

import footer_1 from '../../resources/icons/footer/footer_1.png';
import footer_2 from '../../resources/icons/footer/footer_2.png';
import footer_3 from '../../resources/icons/footer/footer_3.png';

import './footer.scss';
import './footer-media.scss';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className='footer-wrapper'>
                    
                    <div className="footer-block">
                        <div className="footer-block__list">
                            <h3 className="footer-block__list__heading">Информация</h3>
                            <Link to="contacts">Контакты</Link>
                            <Link to="deliveryAndPayment">Доставка и оплата</Link>
                            <Link to="privacypolicy">Политика конфиденциальности</Link>
                        </div>
                    </div>

                    <div className="footer-block">
                            <div className='footer-block__list__section'>
                                <img src={footer_1} alt="icon1"/>
                                <div className="footer-block__list__descr">Готовим с любовью и заботой</div>
                            </div>
                            <div className='footer-block__list__section'>
                                <img src={footer_2} alt="icon2"/>
                                <div className="footer-block__list__descr">Доставка и самовывоз</div>
                            </div>
                            <div className='footer-block__list__section'>
                                <img src={footer_3} alt="icon3"/>
                                <div className="footer-block__list__descr">Натуральные ингредиенты</div>
                            </div>
                    </div>
                    

                    <div className="footer-block">
                        <div className="footer-block__list">
                            <h3 className="footer-list__heading">Разделы</h3>
                            <a href="#header">Главная</a>
                            <Link to="catalog">Каталог</Link>
                            <Link to="vacancy">Вакансии</Link>
                            <Link to="basket">Корзина</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;