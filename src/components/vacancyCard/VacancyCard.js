import React from "react";
import { Link } from "react-router-dom";
import './VacancyCard.scss';
import './VacancyCard-media.scss';

const VacancyCard = ({vacancyData}) => {

    const {title, salary, description, _id} = vacancyData


    return(
        <div className="vacancyCard">
            <div className="vacancyCard__info">
                <div className="vacancyCard__info_top">
                    <Link to={`/vacancy/${_id}`} className="vacancyCard__info_title">{title}</Link>
                    <div className="vacancyCard__info_salary">от {salary} руб.</div>
                </div>
                <div className="vacancyCard__info_descr">{description}</div>
                <div className="vacancyCard__info_buttons">
                    <a href="tel: +78889993344"  className="vacancyCard__info_buttons-call">Позвонить</a>
                    <Link to={`/vacancy/${_id}`}className="vacancyCard__info_buttons-infoPage">Подробнее</Link>
                </div>
            </div>
        </div>
    )
}
export default VacancyCard