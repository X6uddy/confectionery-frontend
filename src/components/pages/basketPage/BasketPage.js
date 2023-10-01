import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";


import BasketCard from "../../basketCard/BasketCard";
import basketIcon from '../../../resources/icons/basketCard/basketicon.svg'

import './BasketPage.scss';
import './BasketPage-media.scss';

const BasketPage = () => {
    const {basketItems, totalQuantity, totalAmount} = useSelector(state => state.basketStates);

    
    const [offerBtn ,setOfferBtn] = useState();


    useEffect(() => {
        const offerScroll = () =>{
            const offerBlock =  document.querySelector('.basketPage__mainContent_makeOrder');
            const offerBlockPosition = offerBlock.getBoundingClientRect();
            if(offerBlockPosition.top <= 400 && window.outerWidth <= 869){
                setOfferBtn(true)
            }else{
                setOfferBtn(false)
            }
        }
        window.addEventListener('scroll', offerScroll);
        return () => {
            window.removeEventListener('scroll', offerScroll);
        }

    }, [])




    

    function typeOfWords(int, array) {
        return (array = array || ['товар', 'товара', 'товаров']) && array[(int % 100 > 4 && int % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(int % 10 < 5) ? int % 10 : 5]];
    }


    return(
        <>
            <Helmet>
                <meta name="Basket" content="Это корзина товаров. Здесь отображаются товары, 
                которые клиент добавил к себе в корзину. Здесь можно управлять количеством товаров, увидеть общую сумму заказа, найти контакты для оформления заказа" />

                <meta name="keywords" content="Корзина товаров, Заказ кондитерских изделий, Корзина сладостей,
                Корзина для покупок, Добавить в корзину, Количество товаров в корзине, Оформление заказа, 
                Купить кондитерские изделия, Подтверждение заказа, Корзина и обратная связь " />
                
                <title>Корзина товаров</title>
            </Helmet>

            <div className="basketPage">
                <div className="container">
                    <h1 className="basketPage__title">Корзина</h1>
                    <div className="basketPage__describe">{totalQuantity} {typeOfWords(totalQuantity)} / {totalAmount} руб.</div>
                    <div className="basketPage-wrapper">
                        <div className="basketPage__mainContent">
                            {(basketItems.length !== 0) ? 
                            <div className="basketPage__mainContent_warning">
                                <span>Внимание!</span>&nbsp;Цена указана за коробку.
                            </div>
                            :
                            ''
                            }
                            <div className="basketPage__mainContent_itemsList">
                                {(basketItems.length !== 0) ? basketItems.map((item) => (
                                        <BasketCard key={item.productID} basketItem={item} />
                                )): <div className="basketPage__mainContent_itemsList-empty">
                                    <div>В вашей корзине пока пусто</div>
                                    <img alt="basket" src={basketIcon} />
                                    <Link to="/catalog" className="basketPage__btn basketPage__btn_empty">Сделать заказ</Link>
                                    </div>}
                            </div>
                        </div>
                        <div className={offerBtn ? "basketPage__infoWindow basketPage__infoWindow_none" : 'basketPage__infoWindow'}>
                            <div className="basketPage__infoWindow-top">
                                <div className="basketPage__infoWindow_title">Итого</div>
                                <div className="basketPage__infoWindow_fullPrice">
                                    <div className="basketPage__infoWindow_fullPrice-tag">Стоимость товаров</div>
                                    <div className="basketPage__infoWindow_fullPrice-divider"></div>
                                    <div className="basketPage__infoWindow_fullPrice-price">{totalAmount} руб</div>
                                </div>
                            </div>
                            <div className="basketPage__infoWindow-bottom">
                                <div className="basketPage__infoWindow_forPay">К оплате:</div>
                                <div className="basketPage__infoWindow_sum">{totalAmount} руб</div>
                            </div>
                            <div className="basketPage__btn-wrapper basketPage__btn-wrapper_onlyCalls">
                                <div className="basketPage__connectInstructions_btns basketPage__connectInstructions_btns-modal">
                                    <a href="tel:+79050366380" className="basketPage__connectInstructions_btn basketPage__connectInstructions_btn-modal">
                                        Позвонить
                                    </a>
                                    <a href="viber://chat?number=%2B79050366380" className="basketPage__connectInstructions_btn basketPage__connectInstructions_btn-viber basketPage__connectInstructions_btn-modal">
                                        Написать в Viber
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basketPage__mainContent_makeOrder" id="makeOrder">
                                <div className="basketPage__title">Оформить заказ</div>
                                <div className="basketPage__describe">Свяжитесь с продавцом любым для вас удобным образом</div>
                                <div className="basketPage__connectInstructions">
                                    Чтобы оформить заказ, вы можете связаться с продавцом по телефону или отправить сообщение в <span>Viber</span>.
                                </div>
                                <div className="basketPage__connectInstructions_btns">
                                    <a href="tel:+79050366380" className="basketPage__connectInstructions_btn">
                                        Позвонить
                                    </a>
                                    <a href="viber://chat?number=%2B79050366380" className="basketPage__connectInstructions_btn basketPage__connectInstructions_btn-viber">
                                        Написать в Viber
                                    </a>
                                </div>
                        </div>
                </div>
                
            </div>
        </>
    )
}
export default BasketPage