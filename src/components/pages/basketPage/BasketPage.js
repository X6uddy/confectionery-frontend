import React from "react";

import './BasketPage.scss';
import BasketCard from "../../basketCard/BasketCard";


const BasketPage = () => {

    return(
        <div className="basketPage">
            <div className="container">
                <div className="basketPage__title">Корзина</div>
                <div className="basketPage__totalOrder">3 товара/1030руб.</div>
                <div className="basketPage-wrapper">
                    <div className="basketPage__itemsList">
                        <BasketCard />
                    </div>
                    <div className="basketPage__infoWindow">
                        <div className="basketPage__infoWindow-top">
                            <div className="basketPage__infoWindow_title">Итого</div>
                            <div className="basketPage__infoWindow_fullPrice">
                                <div className="basketPage__infoWindow_fullPrice-tag">Стоимость товаров</div>
                                <div className="basketPage__infoWindow_fullPrice-divider"></div>
                                <div className="basketPage__infoWindow_fullPrice-price">700 руб</div>
                            </div>
                        </div>
                        <div className="basketPage__infoWindow-bottom">
                            <div className="basketPage__infoWindow_forPay">К оплате</div>
                            <div className="basketPage__infoWindow_sum">1100 руб</div>
                        </div>
                        <div className="basketPage__infoWindow_btn-wrapper">
                            <button className="basketPage__infoWindow_btn">Оформить заказ</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default BasketPage