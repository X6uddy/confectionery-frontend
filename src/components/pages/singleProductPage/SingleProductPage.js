import React , { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../../../store/basketSlice";
import {useGetOneProductQuery} from '../../../store/productsApiSlice';
import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage'

import './SingleProductPage.scss';
import './singleProductPage-media.scss';

import basketPhoto from '../../../resources/icons/productCard/cardBasket_white.png';
import inBasket from '../../../resources/icons/productCard/tip-white.png';


const SingleProductPage = () => {

    const dispatch = useDispatch();
    const {basketItems} = useSelector(state => state.basketStates);
    const {productId} = useParams();
    const {data = [], error, isLoading} = useGetOneProductQuery(productId);
    const [basketStatus, setBasket] = useState();

    useEffect(() => {
        if(basketItems.find(item => item.productID === productId)){
            setBasket(true)
        }else{
            setBasket(false)
        }
    },[basketItems,productId])

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = isLoading ? <Spinner/> : null;
    
    return(
        <>
            {errorMessage}
            {spinner}
            {data.map(item => {
                const {title, photoPath, proteins, fats, carbohydrates, energy, expiration, price, composition, _id} = item;
                return (
                    <div key={_id} className="container">
                        <h2 className="single-info__title">{title}</h2>
                        <div className="single-product">
                            <img src={`http://127.0.0.1:3004${photoPath}`} alt={title} className="single-product__image" />
                            <div className="single-info">
                                {/* <h2 className="single-info__title">{title}</h2> */}
                                {/* <h3>Об изделии:</h3> */}
                                <div className="single-info-wrapper">
                                    <div className="single-info__weight">Масса нетто: <span></span></div>
                                    <div className="single-info__expiration">Срок годности:<span>{expiration} суток</span></div>
                                    <div className="single-info__nutritional">Энергетическая ценность: <span>{energy} ккал</span></div>
                                    <div className="single-info__proteins">Пищевая ценность в 100г: <span className="proteins"><br/>
                                                                                                    белки:    {proteins}<br/>
                                                                                                    жиры:    {fats}<br/>
                                                                                                    углеводы:    {carbohydrates}</span></div>
                                    <div className="single-info__composition">Состав: <span>{composition}</span></div>
                                </div>
                                <div className="single-info_price">
                                    <div className="single-info_price_value" >{price}</div>
                                    <button onClick={() => dispatch(addItem(item))} disabled={basketStatus} className="single-info__add">
                                        {basketStatus ? 
                                        <img src={inBasket} alt='basketIcon' className="single-info__add_icon"/> :
                                        <img src={basketPhoto} alt='basketIcon' className="single-info__add_icon"/>
                                        } 
                                        <div className="single-info__add_text">Добавить в корзину</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default SingleProductPage