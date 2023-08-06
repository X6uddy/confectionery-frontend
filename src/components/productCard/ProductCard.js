import React from "react";
import './ProductCard.scss';
import cardBasket from '../../resources/icons/productCard/cardbasket.svg';
const ProductCard = () => {
    return(
        <>
            <div className="card__wrapper">
                {/* Заменить на img */}
                <div className="card__img"></div>
                <div className="card__describe">
                    <div    className="card__describe_name">smthing</div>
                </div>
                <div className="card__footer">
                    <div className="card__footer_price">280 руб</div>
                    <div className="card__footer_basket">
                        <img className="card__footer_basket-icon" alt="cardBasket" src={cardBasket}/>
                        <div className="card__footer_basket-title">В корзину</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductCard