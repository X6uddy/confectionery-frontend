import React from "react";
import './BasketCard.scss';

const BasketCard = () => {
    return (
        <div className="basketCard">
            <div className="basketCard__img"></div>
            <div className="basketCard__infoBlock">
                <div className="basketCard__infoBlock_title">Печенье сдобное 'Эклерчики' с клубнично-сливочной начинкой</div>
                <div className="basketCard__infoBlock-wrapper">
                    <div className="basketCard__infoBlock_amount">
                        <div className="basketCard__infoBlock_amount-dec">-</div>
                        <div className="basketCard__infoBlock_amount-sum">2</div>
                        <div className="basketCard__infoBlock_amount-inc">+</div>
                    </div>
                    <div className="basketCard__infoBlock_price">Цена: <span>Цена</span></div>
                </div>
            </div>
        </div>
    )
}   
export default BasketCard