import React from "react";

import './VacancyPage.scss';
import './VacancyPage-media.scss';



import VacancyCard from "../../vacancyCard/VacancyCard";
import { useGetAllVacanciesQuery } from "../../../store/vacanciesApiSlice";


import error503 from '../../../resources/img/vacancyPage/error503.jpg';
import Spinner from "../../spinner/Spinner";


const VacancyPage = () => {

    const {data: vacancies = [], error, isLoading} = useGetAllVacanciesQuery();

    return(
        <>
        <div className="vacancy">
            <div className="container">
                <div className="vacancy__title">Открытые вакансии</div>
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