import React from 'react';
import { useParams } from 'react-router-dom';

import './VacancyInfoPage.scss';

import { useGetSingleVacancyQuery } from '../../../store/vacanciesApiSlice';
import Spinner from '../../spinner/Spinner';

import error503 from '../../../resources/img/vacancyPage/error503.jpg';
import phone from '../../../resources/icons/vacancyInfoPage/phone.svg';
import emailIcon from '../../../resources/icons/vacancyInfoPage/email.svg'




const VacancyInfoPage = () => {

    const {id} = useParams();
    const {data: vacancyInfo = [], error, isLoading} = useGetSingleVacancyQuery(id);
    



    return (
        <div className="vacancyInfo">
            <div className="container">
                {isLoading ? <Spinner />: ''}
                {error ? <img alt='error' src={error503} /> : ''}
                {vacancyInfo.map((infoItem) => {
                    
                    const {title, requirements, duties, conditions, salary, description} = infoItem;

                    return (
                        <>
                        <div className="vacancyInfo__card">
                            <div className="vacancyInfo__title">{title}</div>
                            <div className="vacancyInfo__salary">От {salary} руб.</div>
                            <div className="vacancyInfo__descr">{description}</div>
                            <a href="tel: +78889993344" className="vacancyInfo__call">Позвонить</a>
                        </div>
                    <div className="vacancyInfo__blocks">
                        <div className="vacancyInfo__block">
                            <div className="vacancyInfo__block_title">Обязанности:</div>
                            <ul className="vacancyInfo__block_list">
                                {duties.map((item) => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="vacancyInfo__block">
                            <div className="vacancyInfo__block_title">Требования:</div>
                            <ul className="vacancyInfo__block_list">
                                {requirements.map((item) => {
                                        return(
                                            <li>{item}</li>
                                        )
                                    })}
                            </ul>
                        </div>
                        <div className="vacancyInfo__block">
                            <div className="vacancyInfo__block_title">Условия:</div>
                            <ul className="vacancyInfo__block_list">
                            {conditions.map((item) => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    </>
                    )
                })}
                <div className="vacancyInfo__contacts">
                    <div className="vacancyInfo__contacts_title">Контактная информация</div>
                    <div className="vacancyInfo__contacts-wrapper">
                        <div className="vacancyInfo__contacts_block">
                            <img src={phone} alt="phone number" />
                            <div>8 (908) 345-99-99</div>
                        </div>
                        <div className="vacancyInfo__contacts_block">
                            <img src={emailIcon} alt="email" />
                            <div>pochta@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default VacancyInfoPage