import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { addItem } from "../../store/basketSlice";
import { useDispatch,useSelector } from "react-redux";

import './ProductCard.scss';
import './ProductCard-media.scss';


import inBasket from '../../resources/icons/productCard/tip.svg';
import cardBasket from '../../resources/icons/productCard/cardbasket.svg';




const ProductCard = ({product}) => {

    const [basketStatus, setBasket] = useState();
    const {basketItems} = useSelector(state => state.basketStates);
    const {photoPath,productID,title, price} = product;
    const dispatch = useDispatch();
    useEffect(() => {
        if(basketItems.find(item => item.productID === productID)){
            setBasket(true)
        }else{
            setBasket(false)
        }
    },[basketItems,productID])
    const productPrice = Math.round(price)
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
                    <div className="card__footer_price">{productPrice} руб/кг</div>
                    <div className="card__footer_basket">
                        {basketStatus ? <img className="card__footer_basket-icon" alt="cardBasket" src={inBasket}/> : <img onClick={() => dispatch(addItem(product))} className="card__footer_basket-icon" alt="cardBasket" src={cardBasket}/>}
                        {basketStatus ?
                            <div className="card__footer_basket-title"> В корзине </div>
                            :
                            <div onClick={() => dispatch(addItem(product))} className="card__footer_basket-title">В корзину</div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductCard