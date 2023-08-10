import React from "react";
import './ProductCard.scss';
import './ProductCard-media.scss';
import cardBasket from '../../resources/icons/productCard/cardbasket.svg';
import { Link } from "react-router-dom";
import { addItem } from "../../store/basketSlice";
import { useDispatch } from "react-redux";



const ProductCard = ({product}) => {
    const {photoPath,productID,title, price} = product;
    const dispatch = useDispatch();

    return(
        <>
            <div className="card__wrapper">
                <Link to={productID}>
                    <img src={`http://127.0.0.1:3004${photoPath}`} alt={`img number-${productID}`} className="card__img" />
                </Link>
                <div className="card__describe">
                    <Link to={productID} className="card__describe_name">{title}</Link>
                </div>
                <div className="card__footer">
                    <div className="card__footer_price">{price} руб.</div>
                    <div className="card__footer_basket">
                        <img onClick={() => dispatch(addItem(product))} className="card__footer_basket-icon" alt="cardBasket" src={cardBasket}/>
                        <div className="card__footer_basket-title">В корзину</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductCard