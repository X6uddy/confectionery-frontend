import React, { useState } from "react";
import './BasketPage.scss';
import BasketCard from "../../basketCard/BasketCard";
import { useDispatch, useSelector } from "react-redux";
import basketIcon from '../../../resources/icons/basketCard/basketicon.svg'
import { Link } from "react-router-dom";
import { sendOrderByEmail } from "../../../store/basketSlice";


const BasketPage = () => {
    const {basketItems, totalQuantity, totalAmount} = useSelector(state => state.basketStates);

    const dispatch = useDispatch()
    const [buyersName,setBuyersName] = useState('');
    const [buyersNumber,setBuyersNumber] = useState('');
    const [buyersComment,setBuyersComment] = useState('');

    function sendMail() {
        dispatch(sendOrderByEmail({buyersName,buyersNumber,buyersComment}))
        setBuyersComment('');
        setBuyersNumber('');
        setBuyersName('');
    } 

    function typeOfWords(int, array) {
        return (array = array || ['товар', 'товара', 'товаров']) && array[(int % 100 > 4 && int % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(int % 10 < 5) ? int % 10 : 5]];
    }

    return(
        <div className="basketPage">
            <div className="container">
                <div className="basketPage__title">Корзина</div>
                <div className="basketPage__describe">{totalQuantity} {typeOfWords(totalQuantity)} / {totalAmount} руб.</div>
                <div className="basketPage-wrapper">
                    <div className="basketPage__mainContent">
                        <div className="basketPage__mainContent_itemsList">
                            {(basketItems.length !== 0) ? basketItems.map((item) => (
                                    <BasketCard key={item.productID} basketItem={item} />
                            )): <div className="basketPage__mainContent_itemsList-empty">
                                В вашей корзине пока пусто
                                <img alt="basket" src={basketIcon} />
                                <Link to="/catalog" className="basketPage__btn basketPage__btn_empty">Сделать заказ</Link>
                                </div>}
                        </div>
                    </div>
                    <div className="basketPage__infoWindow">
                        <div className="basketPage__infoWindow-top">
                            <div className="basketPage__infoWindow_title">Итого</div>
                            <div className="basketPage__infoWindow_fullPrice">
                                <div className="basketPage__infoWindow_fullPrice-tag">Стоимость товаров</div>
                                <div className="basketPage__infoWindow_fullPrice-divider"></div>
                                <div className="basketPage__infoWindow_fullPrice-price">{totalAmount} руб</div>
                            </div>
                        </div>
                        <div className="basketPage__infoWindow-bottom">
                            <div className="basketPage__infoWindow_forPay">К оплате</div>
                            <div className="basketPage__infoWindow_sum">{totalAmount} руб</div>
                        </div>
                        <div className="basketPage__btn-wrapper">
                            <button className="basketPage__btn">Оформить заказ</button>
                        </div>
                    </div>
                </div>
                <div className="basketPage__mainContent_makeOrder">
                            <div className="basketPage__title">Оформить заказ</div>
                            <div className="basketPage__describe">Укажите контактные  данные, чтобы продавец смог связаться с вами</div>
                            <form className="basketPage__form">
                                <div className="basketPage__form-wrapper">
                                    <div className="basketPage__form_field">
                                        <div>Ваше имя*</div>
                                        <input
                                        type="text"
                                        value={buyersName}
                                        onChange={e => setBuyersName(e.target.value)}
                                        placeholder="Введите имя"
                                        required
                                        />
                                    </div>
                                    <div className="basketPage__form_field">
                                        <div>Ваше телефон</div>
                                        <input
                                        type="tel"
                                        maxLength="50"
                                        value={buyersNumber}
                                        onChange={e => setBuyersNumber(e.target.value)}
                                        placeholder="Введите телефон"
                                        required
                                        />
                                    </div>
                                </div>
                                <div className="basketPage__form_field_comment">
                                    <div>Комментарий к заказу</div>
                                    <textarea
                                    type="text"
                                    maxLength='500'
                                    value={buyersComment}
                                    onChange={e => setBuyersComment(e.target.value)}
                                    placeholder="Здесь можно оставить комментарий к заказу"
                                    />
                                </div>
                            </form>
                            <div className="basketPage__mainContent_orderSum">
                                <div className="basketPage__mainContent_orderSum-title">
                                Итоговая сумма заказа:
                                </div>
                                <div className="basketPage__mainContent_orderSum-price">
                                {totalAmount} руб
                                </div>
                            </div>
                            <button onClick={sendMail} className="basketPage__btn basketPage__btn_mainContent">Оформить заказ</button>
                            <div className="basketPage__privacyPolicy">Нажимая на кнопку "Оформить заказ" Я разрешаю обработку моих персональных данных в соответствии с <Link className="basketPage__privacyPolicy_link" to='/privacypolicy'>Политикой конфиденциальности</Link></div>
                    </div>
            </div>
        </div>
    )
}
export default BasketPage