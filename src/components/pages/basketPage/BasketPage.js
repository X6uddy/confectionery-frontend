import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import { useGetBasketProductsQuery } from "../../../store/productsApiSlice";

import './BasketPage.scss';
import BasketCard from "../../basketCard/BasketCard";


const BasketPage = () => {

    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket)
    // const arrID = [];
    // basket.map(item => {
    //     arrID.push(item.productId);
    // })

    // const {data: products, error, isLoading} = useGetBasketProductsQuery(arrID);
    // if(error) {
    //     console.log('error')
    // } else if(isLoading){
    //     console.log('loading')
    // } else {
    //     console.log(products)
    // }
    // console.log(basket)
    // console.log(arrID)

    function renderItems (arr) {
        const items = arr.map((item, i) => {
            return (
                <li key={i} >
                    <BasketCard item={item}/>
                </li>
            )
        })
        return (
            <ul className="basketPage__itemsList">
                {items}
            </ul>
        )
    }

    const items = renderItems(basket)

    return(
        <div className="basketPage">
            <div className="container">
                <div className="basketPage__title">Корзина</div>
                <div className="basketPage__totalOrder">{basket.length} товара/1030руб.</div>
                <div className="basketPage-wrapper">
                    {items}
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