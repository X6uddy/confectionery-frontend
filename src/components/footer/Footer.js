import React from 'react';

import footer_1 from '../../resources/icons/footer/footer_1.png';
import footer_2 from '../../resources/icons/footer/footer_2.png';
import footer_3 from '../../resources/icons/footer/footer_3.png';

import './footer.scss';
import './footer-media.scss';

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className='footer-wrapper'>
                    
                    <div className="footer-block">
                        <div className="footer-list">
                            <h3 className="footer-list__heading">Информация</h3>
                            <a href='#root'>О компании</a>
                            <a href='#sds'>Политика</a>
                            <a href='/contacts'>Контакты</a>
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
                            <a href='/catalog'>Печенье</a>
                            <a href='/catalog'>Торты</a>
                            <a href='/catalog'>Кексы</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;