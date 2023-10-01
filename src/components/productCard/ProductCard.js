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
    const[linkToBasket,setLink] = useState(false)
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
                    <img src={`${photoPath}`} alt={`img number-${productID}`} className="card__img" />
                </Link>
                <div className="card__describe">
                    <Link to={productID} className="card__describe_name">{title}</Link>
                </div>
                <div className="card__footer">
                    <div className="card__footer_price">{productPrice} руб/кг</div>
                    <div className="card__footer_basket">
                        {basketStatus ? <img className="card__footer_basket-icon card__footer_basket-inBasket" alt="cardBasket" src={inBasket}/> : <img onClick={() => dispatch(addItem(product))} className="card__footer_basket-icon" alt="cardBasket" src={cardBasket}/>}
                        {basketStatus ?
                            <Link to='/basket' className="card__footer_basket-title" 
                            onMouseOver={() => setLink(true)}
                            onMouseOut={() => setLink(false)}
                            style={{
                                color: linkToBasket ? '#006800': '#000'
                            }}
                            > {linkToBasket ? 'В корзину': 'В корзине'} </Link>
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