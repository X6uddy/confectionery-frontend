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
import tabDown from '../../../resources/icons/singleProduct/tab-down.png';
import priceWarning from '../../../resources/icons/singleProduct/priceWarning_white.png';


const SingleProductPage = () => {

    const dispatch = useDispatch();
    const {basketItems} = useSelector(state => state.basketStates);
    const {productId} = useParams();
    const {data: product = [], error, isLoading} = useGetOneProductQuery(productId); // запрос на сервер для получения продукта
    const [basketStatus, setBasket] = useState(); //здесь basketStatus это состояние которое показывает есть ли продукт в корзине

    useEffect(() => {
        if(basketItems.find(item => item.productID === productId)){
            setBasket(true)
        }else{
            setBasket(false)
        }
    },[basketItems,productId])


    //функционал табов
    const [activeTab, setActiveTab] = useState(0);

    //функция, которая устанавливает активный таб
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = isLoading ? <Spinner/> : null;

    return(
        <div className="single">
            {errorMessage}
            {spinner}
            {product.map(item => {
                const {title, photoPath, proteins, fats, carbohydrates, price, _id, description, box_weight} = item;
                const tabs = [
                    { title: 'Пищевая ценность', content: `На 100г: белки: ${proteins}, жиры: ${fats}, углеводы: ${carbohydrates}.`},
                    { title: 'Вес коробки', content: `Вес продукции в коробке: ${box_weight} кг`},
                    { title: 'Цена за коробку', content: `Цена за 1 коробку: ${price * box_weight} рублей`}
                ]
                return (
                    <div key={_id} className="container">
                        <div className="single-product">
                            <img src={`http://127.0.0.1:3004${photoPath}`} alt={title} className="single-product__image" />
                            <div className="single-info">

                                <div>
                                    <h2 className="single-info__title">{title}</h2>
                                    <div className="single-info-wrapper">
                                        <div className="single-info__expiration">
                                        {description}
                                        </div>
                                    </div>
                                </div>

                                <div className="single-info_price">
                                    <div className="single-info_price__warning">
                                        <img src={priceWarning} alt="price-warning" />                                                                                    
                                        Цена может изменяться в зависимости от сырья</div>
                                    <div className="single-info_price_value" >{price} руб/кг</div>
                                    <button onClick={() => dispatch(addItem(item))} disabled={basketStatus} className="single-info__add">
                                        {basketStatus ? 
                                        <img src={inBasket} alt='basketIcon' className="single-info__add_icon"/>:
                                        <img src={basketPhoto} alt='basketIcon' className="single-info__add_icon"/>
                                        } 
                                        <div className="single-info__add_text">{!basketStatus ? 'Добавить в корзину' : 'Добавлено в корзину'}</div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="tab">
                            <ul className="tab-header">
                                {tabs.map((tab, index) => (
                                <li
                                    key={index}
                                    className={`tab-item ${index === activeTab ? 'tab-item__active' : ''}`}
                                    onClick={() => handleTabClick(index)}
                                >
                                    <div className={`tab-item__title ${index === activeTab ? 'tab-item__active-mobile' : ''}`}>
                                        {tab.title}
                                        <img src={tabDown} alt="arrow-down" className="arror-down"/>
                                    </div>
                                    {activeTab === index && (
                                    <div className="tab-content tab-content_mobile">
                                        {tab.content}
                                    </div>
                                    )}
                                </li>
                                ))}
                            </ul>
                            <div className="tab-content tab-content_desktop">
                                {tabs[activeTab].content}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default SingleProductPage