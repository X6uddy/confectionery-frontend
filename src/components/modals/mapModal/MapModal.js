import React from "react";
import './MapModal.scss'
import YandexMap from "./YandexMap";
import closeIcon from '../../../resources/icons/mapModal/closeIcon.svg';
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/mapModalSlice";



const MapModal = () => {
    const mapModalState = useSelector(state => state.mapModalState.mapModalCondition);
    const dispatch = useDispatch();

    return(
        <div 
            onClick={(e) => dispatch(closeModal())}
            className="mapModal" 
            style={{
                display: mapModalState? "flex": "none",
            }}>
            <div className="mapModal__window" onClick={(e) => e.stopPropagation()}>
                <div className="mapModal__window_infoBlock">
                    <div className="mapModal__window_infoBlock-adress">
                        <span>Мы находимся:</span><br />20-й Инженерный проезд, 5 
                    </div>
                    <div className="mapModal__window_infoBlock-shedule">
                        <div className="shedule__days">
                            <div>Понедельник</div>
                            <div>Вторник</div>
                            <div>Среда</div>
                            <div>Четверг</div>
                            <div>Пятница</div>
                            <div>Суббота</div>
                            <div>Воскресенье</div>
                        </div>
                        <div className="shedule__times">
                            <div>7:00-17:00</div>
                            <div>7:00-17:00</div>
                            <div>7:00-17:00</div>
                            <div>7:00-17:00</div>
                            <div>Выходной</div>
                            <div>Выходной</div>
                            <div>7:00-17:00</div>
                        </div>
                    </div>
                    <div className="mapModal__window_infoBlock-describe">Мы ваc ждем!</div>
                </div>
                <YandexMap />
                <img onClick={(e) => dispatch(closeModal())} alt="closeIcon" src={closeIcon} className="mapModal__window_close"/>
            </div>
        </div>
    )
}
export default MapModal

