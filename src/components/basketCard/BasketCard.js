import React, { useEffect, useState } from "react";
import './BasketCard.scss';
import { useDispatch } from "react-redux";
import { addItem, removeItem, deleteItem, setInputState} from "../../store/basketSlice";
import removeIcon from '../../resources/icons/basketCard/removeicon.svg';
import { Link } from "react-router-dom";


const BasketCard = ({basketItem}) => {

    const dispatch = useDispatch();
    const [quantityValue,setValue] = useState('');
    const [activeInput,setInputStatus] = useState(false);
    const {productID, totalPrice, quantity, title, photoPath} = basketItem;
    
    useEffect(() => {
        setValue(quantity)
    }, [quantity])

    const combineFunc = (qua) => {
        dispatch(setInputState({quantitySum: qua, id: productID}))
    }

    return (
        <div className="basketCard">
            {/* накинь линк на фото,чтобы можно было попасть на сингл пейдж */}
            <img src={removeIcon} alt="remove icon" className="basketCard__remove" onClick={() => dispatch(deleteItem(productID))}/>
            <Link to={`/catalog/${productID}`} className="basketCard__img"><img src={`http://127.0.0.1:3004${photoPath}`} alt="product" className="basketCard__img" /></Link>
            <div className="basketCard__infoBlock">
                <div className="basketCard__infoBlock_title">{title}</div>
                <div className="basketCard__infoBlock-wrapper">
                    <div className="basketCard__infoBlock_amount">
                        <div onClick={() => dispatch(removeItem(productID))} className="basketCard__infoBlock_amount-dec">-</div>
                        <div className="basketCard__infoBlock_amount-sum" onClick={() => setInputStatus(true)}>
                            {activeInput ? 
                            <input 
                            value={quantityValue}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={(e) => {
                                combineFunc(e.target.value)
                                setInputStatus(false)
                            }}
                            type="number"
                            required/> 
                            :
                            quantity}
                        </div>
                        <div onClick={() => dispatch(addItem(basketItem))} className="basketCard__infoBlock_amount-inc">+</div>
                    </div>
                    <div className="basketCard__infoBlock_price">Цена: <span>{totalPrice} руб.</span></div>
                </div>
            </div>
        </div>
    )
}   
export default BasketCard