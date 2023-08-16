import React from "react";
import { useDispatch } from "react-redux";

import { addToBasket, removeFromBasket } from '../../store/basketSlice';

import './BasketCard.scss';

const BasketCard = ({item}) => {

    const {productId, quantity} = item;
    // console.log(item)

    const dispatch = useDispatch();
    // const productId = '233';

    const handleAddToCart = () => {
        dispatch(addToBasket({ productId, quantity: 1 }));
    };


    return (
        <div className="basketCard">
            <div className="basketCard__img"></div>
            <div className="basketCard__info">
                <div className="basketCard__info_title">ВСЕМ ПРИВЕТ РЕБЯТА - {productId}</div>
                <div className="basketCard__info-wrapper">
                    <div className="basketCard__info_amount">
                        <div className="basketCard__info_amount-dec">-</div>
                        <div className="basketCard__info_amount-sum">{quantity}</div>
                        <div className="basketCard__info_amount-inc" onClick={handleAddToCart}>+</div>
                    </div>
                    <div className="basketCard__info_price">Цена: <span>{quantity * 2}</span></div>
                </div>
            </div>
        </div>
    )
}   
export default BasketCard