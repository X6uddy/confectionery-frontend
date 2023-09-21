import React from "react";

import logo from '../../../resources/img/contacts/logo_img.png';

import './contactsPage.scss';
import './contactPage-media.scss';

const ContactsPage = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contacts">
                    <h1 className="contacts-info__title">Контакты</h1>
                    <div className="contacts-logo">
                        <img src={logo} alt="logo"/>
                    </div>

                    <div className="contacts-info">
                        <div className="contacts-info-block">
                            <h3 className="contacts-info__subtitle contacts-info__subtitle_shedule">Режим работы:</h3>
                            <div className="contacts-info_working">
                                <div className="contacts-info_working-days">
                                    <p>Понедельник</p>
                                    <p>Вторник</p>
                                    <p>Среда</p>
                                    <p>Четверг</p>
                                    <p>Пятница</p>
                                    <p>Суббота</p>
                                    <p>Воскресенье</p>
                                </div>
                                <div className="contacts-info_working-hours">
                                    <p>7:00-17:00</p>
                                    <p>7:00-17:00</p>
                                    <p>7:00-17:00</p>
                                    <p>7:00-17:00</p>
                                    <p>Выходной</p>
                                    <p>Выходной</p>
                                    <p>7:00-17:00</p>
                                </div>
                            </div>
                        </div>

                        <div className="contacts-info-block">
                            <h3 className="contacts-info__subtitle">Пункты самовывоза:</h3>
                            <p className="contacts-info__descr">20-й Инженерный проезд, 5</p>
                        </div>

                        <div className="contacts-info-block">
                            <h3 className="contacts-info__subtitle">Телефон:</h3>
                            <p className="contacts-info__descr"><a href="tel:+79050366380">+7 (905) 036-63-80</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsPage;