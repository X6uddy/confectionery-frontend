import React from 'react';
import { Helmet } from 'react-helmet';

import YandexMapDelivery from './yandexMapDelivery';

import bicycle from '../../../resources/img/DeliveryAndPaymentPage/truck.svg';
import logo from '../../../resources/img/DeliveryAndPaymentPage/logo_img.png';

import './deliveryAndPaymentPage.scss';
import './deliveryAndPaymentPage-media.scss';

const DeliveryAndPaymentPage = () => {


    return (
        <>
            <Helmet>
                <meta name="Доставка и Оплата" content=" На этой странице можно изучить способы оплаты и доставки товара, 
                посмотреть на карте как добраться до точки самовывоза, узнать режим работы." />

                <meta name="keywords" content="Доставка кондитерских изделий, Условия доставки, 
                Контакты для помощи с доставкой и оплатой, Возможность самовывоза" />
                
                <title>Доставка и оплата</title>
            </Helmet>

            <div className="delivery">
                <div className="container">
                    <div className="delivery__block delivery__block_truck">
                        <div className="delivery__block_truck-image"><img src={bicycle} alt="bicycle" /></div>
                        <div className='delivery__block_text'>
                            <h1 className="delivery__block__title">Доставка</h1>
                            <div className="delivery__block__descr">
                                <p> 
                                Мы ценим ваш интерес к нашим продуктам и стремимся обеспечить вас наилучшим обслуживанием.<br/><br/>
                                При оформлении заказа важно учитывать количество товаров, которое вы планируете приобрести.
                                Это связано с нашей политикой доставки, которая зависит от объема вашего заказа.<br />
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="delivery__block">
                        <div className='delivery__block_text'>
                            <div className="delivery__block__title">Самовывоз</div>
                            <div className="delivery__block__descr">
                                <p>
                                    Вы можете сделать заказ и забрать его самостоятельно с нашего производства по адресу: 20-й Инженерный проезд, 5.<br /><br />
                                    Забрать заказ можно на следующий день в пункте самовывоза в любое удобное время в промежутке с 8 до 17 часов.
                                </p>
                            </div>
                        </div>
                        <div className="delivery__block_image"><img src={logo} alt="logo" /></div>
                    </div>
                    <YandexMapDelivery />
                </div>
            </div>
        </>
    )
}

export default DeliveryAndPaymentPage;