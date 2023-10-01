import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { useGetSingleVacancyQuery } from '../../../store/vacanciesApiSlice';
import Spinner from '../../spinner/Spinner';

import error503 from '../../../resources/img/vacancyPage/error503.jpg';
import phone from '../../../resources/icons/vacancyInfoPage/phone.svg';
import emailIcon from '../../../resources/icons/vacancyInfoPage/email.svg'

import './VacancyInfoPage.scss';
import './VacancyInfoPage-media.scss';

const VacancyInfoPage = () => {

    const {id} = useParams();
    const {data: vacancyInfo = [], error, isLoading} = useGetSingleVacancyQuery(id);

    return (
        <>
            <Helmet>
                <meta name="Вакансия" content="На этой странице дана детальная информация по интересующей вакансии. 
                Человек может изучить обязанности, режим работы, условия труда, заработную плату и связаться для дальнейшего сотрудничества"/>

                <meta name="keywords" content="Работа в кондитерской фабрике, Вакансии для кондитеров, 
                Работа в производстве сладостей, Условия труда, Зарплата и компенсации, Требования к соискателям, 
                Как подать заявку на вакансию, Сроки и процесс отбора, Контакты для связи и вопросов о вакансиях" />
                
                <title>Вакансия</title>
            </Helmet>

            <div className="vacancyInfo">
                <div className="container">
                    {isLoading ? <Spinner />: ''}
                    {error ? <img alt='error' src={error503} /> : ''}
                    {vacancyInfo.map((infoItem) => {
                        
                        const {title, requirements, duties, conditions, salary, description, _id} = infoItem;
                        
                        return (
                            <div key={_id}>
                                <div className="vacancyInfo__card">
                                    <h1 className="vacancyInfo__title">{title}</h1>
                                    <div className="vacancyInfo__salary">{salary}</div>
                                    <div className="vacancyInfo__descr">{description}</div>
                                    <a href="tel: +78889993344" className="vacancyInfo__call">Позвонить</a>
                                </div>

                                <div className="vacancyInfo__blocks">
                                {(duties.length !== 0) && <div className="vacancyInfo__block">
                                    <div className="vacancyInfo__block_title">Обязанности:</div>
                                    <ul className="vacancyInfo__block_list">
                                        {duties.map((item, index) => {
                                            return(
                                                <li key={`duty-${index}`}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </div>}
                                {(requirements.length !== 0) && <div className="vacancyInfo__block">
                                    <div className="vacancyInfo__block_title">Требования:</div>
                                    <ul className="vacancyInfo__block_list">
                                        {requirements.map((item,index) => {
                                                return(
                                                    <li key={`requirement-${index}`}>{item}</li>
                                                )
                                            })}
                                    </ul>
                                </div>}
                                {(conditions.length !== 0) && <div className="vacancyInfo__block">
                                    <div className="vacancyInfo__block_title">Условия:</div>
                                    <ul className="vacancyInfo__block_list">
                                    {conditions.map((item, index) => {
                                            return(
                                                <li key={`condition-${index}`}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </div>}
                            </div>
                        </div>
                        )
                    })}
                    <div className="vacancyInfo__contacts">
                        <div className="vacancyInfo__contacts_title">Контактная информация</div>
                        <div className="vacancyInfo__contacts-wrapper">
                            <div className="vacancyInfo__contacts_block">
                                <img src={phone} alt="phone number" />
                                <a href="tel:+79050366380" className='vacancyInfo__contacts_block-connectItem'>+7 (905) 036-63-80</a>
                            </div>
                            <div className="vacancyInfo__contacts_block">
                                <img src={emailIcon} alt="email" />
                                <a className='vacancyInfo__contacts_block-connectItem' href="mailto:kurushinanelli@mail.ru">kurushinanelli@mail.ru</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default VacancyInfoPage;