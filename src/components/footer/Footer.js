import React from 'react';

import footer_1 from '../../resources/icons/footer/footer_1.svg';
import footer_2 from '../../resources/icons/footer/footer_2.svg';
import footer_3 from '../../resources/icons/footer/footer_3.svg';

import './_footer.scss';
import './_footer-media.scss';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-wrapper'>
                
                <div className="footer-block">
                    <div className="footer-list">
                        <h3 className="footer-list__heading">Информация</h3>
                        <a href='#'>О компании</a>
                        <a href='#'>Политика</a>
                        <a href='#'>Контакты</a>
                    </div>
                </div>

                <div className="footer-block">
                        <div className='footer-list-section'>
                            <img src={footer_1} alt="icon1"/>
                            <div className="footer-list__descr">Готовим с любовью и заботой</div>
                        </div>
                        <div className='footer-list-section'>
                            <img src={footer_2} alt="icon2"/>
                            <div className="footer-list__descr">Доставка и самовывоз</div>
                        </div>
                        <div className='footer-list-section'>
                            <img src={footer_3} alt="icon3"/>
                            <div className="footer-list__descr">Натуральные ингредиенты</div>
                        </div>
                </div>
                

                <div className="footer-block">
                    <div className="footer-list">
                        <h3 className="footer-list__heading">Каталог</h3>
                        <a href='#'>Печенька</a>
                        <a href='#'>Тортик</a>
                        <a href='#'>Еще че-то</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;