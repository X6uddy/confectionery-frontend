import YandexMap from '../../modals/mapModal/YandexMap';

import bicycle from '../../../resources/img/DeliveryAndPaymentPage/bicycle.png';
import logo from '../../../resources/img/DeliveryAndPaymentPage/logo_img.png';

import './deliveryAndPaymentPage.scss';
import './deliveryAndPaymentPage-media.scss';

const DeliveryAndPaymentPage = () => {
    return (
        <div className="delivery">
            <div className="container">
                <div className="delivery-block">
                    <div className="delivery-block_title">
                        <h2 className="delivery-block__title">Доставка и оплата</h2>
                        <p>Для наших покупателей доступны 2 способа доставки: <span>курьерская доставка</span> по Санкт-Петербургу в пределах КАД и <span>самовывоз</span>.</p>
                    </div>
                    {/* <div className="delivery-block_wrapper"> */}
                        <div className="delivery-block_image"><img src={bicycle} alt="bicycle" /></div>
                        <div className="delivery-block_descr">
                            <h3 className="delivery-block__info">Курьерска доставка:</h3>
                            <p> Курьеры работают каждый день с 11 до 21 часа. Доставка макарон осуществляется только по Санкт-Петербургу в пределах кольцевой автомобильной дороги (КАД). 
                                <span> Точная зона доставки</span>. <br/><br/>
                                Если Вы готовы принять заказ в интервале с 12 до 17 часов или с 17 до 21 часа, то доставка будет стоить 300 рублей. <br/><br/>
                                При заказе от 3000 рублей доставка БЕСПЛАТНАЯ.<br/><br/>
                                При оформлении заказа до 15 часов возможна доставка в тот же день в промежутке с 17 до 21 часа.<br/> <br/>
                                Курьер предупредит Вас о своём прибытии за 30-40 минут.<br/>
                            </p>
                        </div>
                    {/* </div> */}
                </div>


                <div className="delivery-block">
                    <div className="delivery-block__descr">
                        <h3 className="delivery-block__info">Самовывоз</h3>
                        <p>
                            Вы можете сделать заказ и забрать его самостоятельно с нашего производства по адресу: ул. Маршала Тухачевского 22 БЦ "Сова" <br/><br/>
                            Заказ необходимо сделать до 20 часов, чтобы забрать его на следующий день в пункте самовывоза в любое удобное время в промежутке с 13 до 22 часов.<br/><br/>
                            Оплатить заказ банковской картой можно заранее при оформлении. Непосредственно при получении банковской картой расплатиться нельзя.<br/><br/>
                        </p>
                        
                        <h3 className="delivery-block__info">Оплата</h3>
                        <p>
                            Вы можете оплатить заказ при получении наличными или заранее оплатить заказ банковской картой. Для этого укажите выбранный способ при оформлении заказа. <br/><br/>
                            Оплата банковской картой удобна, если вы хотите отправить десерты в подарок или не желаете возиться с наличными при получении заказа.<br/><br/>
                            Если у Вас нет карты российского банка, мы можем принять оплату через платёжную систему PayPal.
                        </p>
                    </div>
                    <div className="delivery-block__image"><img src={logo} alt="logo" /></div>
                </div>

                <YandexMap />
            </div>
        </div>
    )
}

export default DeliveryAndPaymentPage;