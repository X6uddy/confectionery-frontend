import React from "react";
import './ProductCard.scss';
import cardBasket from '../../../../resources/icons/productCard/cardbasket.svg';
const ProductCard = ({photoPath,title,price}) => {
    return(
        <>
            <div className="card__wrapper">
                <img alt="productimg" src={`http://127.0.0.1:3004${photoPath}`} className="card__img"></img>
                <div className="card__describe">
                    <div    className="card__describe_name">${title}</div>
                </div>
                <div className="card__footer">
                    <div className="card__footer_price">${price} руб</div>
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