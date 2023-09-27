import React from "react";
import { Helmet } from "react-helmet";

import VacancyCard from "../../vacancyCard/VacancyCard";
import { useGetAllVacanciesQuery } from "../../../store/vacanciesApiSlice";
import Spinner from "../../spinner/Spinner";

import error503 from '../../../resources/img/vacancyPage/error503.jpg';

import './VacancyPage.scss';
import './VacancyPage-media.scss';


const VacancyPage = () => {

    const {data: vacancies = [], error, isLoading} = useGetAllVacanciesQuery();

    return(
        <>
            <Helmet>
                <meta name="Вакансии" content=" На этой странице находится список вакансий. 
                Человек может выбрать для себя вакансию, которая ему понравилась, 
                затем связаться с руководством кондитерской фабрики и уточнить детали приема на работу" />

                <meta name="keywords" content="Работа в кондитерской фабрике, Вакансии для кондитеров, 
                Работа в производстве сладостей, Вакансии для пекарей, Требуются кондитеры, Производственные рабочие места" />
                
                <title>Вакансии</title>
            </Helmet>

            <div className="vacancy">
                <div className="container">
                    <h1 className="vacancy__title">Открытые вакансии</h1>
                    <div className="vacancy__list">
                        { error ? <img alt="error503" style={{width: '100%'}} src={error503} /> : ''}
                        { isLoading ? <Spinner />: ''}
                        {vacancies.map((item) => {
                                return (
                                    item.isActive ?
                                    <VacancyCard key={item._id} vacancyData={item} />
                                    :
                                    ''
                                )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default VacancyPage