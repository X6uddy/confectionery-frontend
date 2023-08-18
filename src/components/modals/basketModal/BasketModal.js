import React from "react";
import './BasketModal.scss';
import { Link } from "react-router-dom";
import closeModal from '../../../resources/icons/basketModal/closeIcon.svg'
import { useSelector,useDispatch } from "react-redux";
import { closeBasketModal } from "../../../store/basketSlice";

const BasketModal = () => {

    const {basketModal} = useSelector(state => state.basketStates);
    const dispatch = useDispatch()

    return(
        <div 
        className="basketModal" 
        onClick={() => dispatch(closeBasketModal())}
        style={{
            display: basketModal? "flex": "none",
        }}
        >
            <div className="basketModal__window" onClick={(e) => e.stopPropagation()}>
                <img className="basketModal__closeModal" onClick={() => dispatch(closeBasketModal())} alt="closemodal" src={closeModal}/>
                <div className="basketModal__window_title">В корзине пусто</div>
                <Link className="basketModal__window_linkBtn" to="/catalog" onClick={() => dispatch(closeBasketModal())}>Сделать заказ</Link>
            </div>
        </div>
    )
}
export default BasketModal;