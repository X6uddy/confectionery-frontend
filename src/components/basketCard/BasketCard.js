import React from "react";
import './BasketCard.scss';
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/basketSlice";


const BasketCard = ({basketItem}) => {

    const dispatch = useDispatch();

    const {productID, price, quantity, title, photoPath} = basketItem;

    return (
        <div className="basketCard">
            {/* накинь линк на фото,чтобы можно было попасть на сингл пейдж */}
            <img src={`http://127.0.0.1:3004${photoPath}`} alt="product" className="basketCard__img" /> 
            <div className="basketCard__infoBlock">
                <div className="basketCard__infoBlock_title">{title}</div>
                <div className="basketCard__infoBlock-wrapper">
                    <div className="basketCard__infoBlock_amount">
                        <div onClick={() => dispatch(removeItem(productID))} className="basketCard__infoBlock_amount-dec">-</div>
                        <div className="basketCard__infoBlock_amount-sum">{quantity}</div>
                        <div onClick={() => dispatch(addItem(basketItem))} className="basketCard__infoBlock_amount-inc">+</div>
                    </div>
                    <div className="basketCard__infoBlock_price">Цена: <span>{price} руб.</span></div>
                </div>
            </div>
        </div>
    )
}   
export default BasketCard