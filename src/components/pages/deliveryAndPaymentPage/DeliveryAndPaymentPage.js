import React from 'react';

import bicycle from '../../../resources/img/DeliveryAndPaymentPage/bicycle.png';
import logo from '../../../resources/img/DeliveryAndPaymentPage/logo_img.png';
import YandexMapDelivery from './yandexMapDelivery';

import './deliveryAndPaymentPage.scss';
import './deliveryAndPaymentPage-media.scss';

const DeliveryAndPaymentPage = () => {


    return (
        <div className="delivery">
            <div className="container">
                <div className="delivery-block">
                    <div className="delivery-block_title">
                        <h2 className="delivery-block__title">Доставка</h2>
                    </div>
                        <div className="delivery-block_image"><img src={bicycle} alt="bicycle" /></div>
                        <div className="delivery-block_descr">
                            <p> 
                            Мы ценим ваш интерес к нашим продуктам и стремимся обеспечить вас наилучшим обслуживанием.<br/><br/>
                            При оформлении заказа важно учитывать количество товаров, которое вы планируете приобрести.
                            Это связано с нашей политикой доставки, которая зависит от объема вашего заказа.<br />
                            </p>
                        </div>
                </div>


                <div className="delivery-block">
                    <div className="delivery-block__descr">
                        <h3 className="delivery-block__info">Самовывоз</h3>
                        <p>
                        Вы можете сделать заказ и забрать его самостоятельно с нашего производства по адресу: 20-й Инженерный проезд, 5.<br /><br />
                        Забрать заказ можно на следующий день в пункте самовывоза в любое удобное время в промежутке с 8 до 17 часов.
                        </p>
                    </div>
                    <div className="delivery-block__image"><img src={logo} alt="logo" /></div>
                </div>

                <YandexMapDelivery />
            </div>
        </div>
    )
}

export default DeliveryAndPaymentPage;