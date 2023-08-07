import React from "react";
import './ProductCard.scss';
import cardBasket from '../../resources/icons/productCard/cardbasket.svg';
const ProductCard = ({product}) => {
    const {photoPath,productID,title, price} = product 

    return(
        <>
            <div className="card__wrapper">
                <img src={`http://127.0.0.1:3004${photoPath}`} alt={`img number-${productID}`} className="card__img" />
                <div className="card__describe">
                    <div    className="card__describe_name">{title}</div>
                </div>
                <div className="card__footer">
                    <div className="card__footer_price">{price}</div>
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