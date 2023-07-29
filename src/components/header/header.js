import React from 'react'
import './header.scss'


function Header() {

    return(
        <div className="header">
            <div className="header__divider">
                <div className="container">
                    <div className="header__top">
                        <div className="header__top_elem">
                            <div className="header__top_cityIcon"></div>
                            <div className="header__top_tag">Ульяновск</div>
                        </div>
                        <div className="header__top_elem">
                            <div className="header__top_phoneIcon"></div>
                            <div className="header__top_tag">8 812 309-82-88</div>
                        </div>
                        <div className="header__top_elem">
                            <div className="header__top_basketIcon">
                                {/* здесь будет отображаться кол-во товаров в корзине */}
                                <div className="header__top_basketIcon-counter">14</div> 
                            </div>
                            <div className="header__top_tag">В корзине (4 товара)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__main">
                <div className="container">
                    <div className="header__main_wrapper">
                            <div className="header__main_item">Доставка и оплата</div>
                            <div className="header__main_item">Оптовые поставки</div>
                            <div className="header__main_logo"></div>
                            <div className="header__main_item">контакты</div>
                            <div className="header__main_item">каталог товаров</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header