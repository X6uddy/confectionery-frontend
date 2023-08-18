import React from "react";
import './OrderSuccessModal.scss';
import { Link } from "react-router-dom";
import closeModal from '../../../resources/icons/orderSuccessModal/closeIcon.svg'
import { useSelector,useDispatch } from "react-redux";
import { closeSuccessModal } from "../../../store/basketSlice";

const OrderSuccessModal = () => {

    const {orderSuccessModal} = useSelector(state => state.basketStates);
    const dispatch = useDispatch()

    return(
        <div 
        className="orderSuccessModal" 
        onClick={() => dispatch(closeSuccessModal())}
        style={{
            display: orderSuccessModal? "flex": "none",
        }}
        >
            <div className="orderSuccessModal__window" onClick={(e) => e.stopPropagation()}>
                <img className="orderSuccessModal__closeModal" onClick={() => dispatch(closeSuccessModal())} alt="closemodal" src={closeModal}/>
                <div className="orderSuccessModal__window_title">
                    Заказ успешно оформлен!<br />
                    <span>Скоро с вами свяжутся для его подтверждения</span>
                </div>
                <Link className="orderSuccessModal__window_linkBtn" to="/" onClick={() => dispatch(closeSuccessModal())}>Главная</Link>
            </div>
        </div>
    )
}
export default OrderSuccessModal;