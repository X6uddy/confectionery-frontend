import React, { useEffect, useState } from "react";
import './BasketCard.scss';
import { useDispatch } from "react-redux";
import { addItem, removeItem, deleteItem, setInputState} from "../../store/basketSlice";
import removeIcon from '../../resources/icons/basketCard/removeicon.svg';
import { Link } from "react-router-dom";


const BasketCard = ({basketItem}) => {

    const dispatch = useDispatch();
    const [quantityValue,setValue] = useState('');
    const {productID, totalPrice, quantity, title, photoPath} = basketItem;
    
    useEffect(() => {
        setValue(quantity)
    }, [quantity])



    const onChangeHandler = (event) => {
            const {value} = event.target;
            const filtredValue = value.replace(/[,.]/g,"");
            setValue(filtredValue)
    }

    const onBlurHandler = (event) => {
        const combineFunc = (qua) => {
            dispatch(setInputState({quantitySum: qua, id: productID}))
        }

        const {value} = event.target;
        if(Number(value) === 0 || value === '' || value < 0){
            setValue(1)
            combineFunc(1)
        }else{
            setValue(value.replace(/^0+/,""))
            combineFunc(value)
        }

}

    return (
        <div className="basketCard">
            {/* накинь линк на фото,чтобы можно было попасть на сингл пейдж */}
            <img src={removeIcon} alt="remove icon" className="basketCard__remove" onClick={() => dispatch(deleteItem(productID))}/>
            <Link to={`/catalog/${productID}`} className="basketCard__img"><img src={`http://127.0.0.1:3004${photoPath}`} alt="product" className="basketCard__img" /></Link>
            <div className="basketCard__infoBlock">
            <Link to={`/catalog/${productID}`} className="basketCard__infoBlock_title">{title}</Link>
                <div className="basketCard__infoBlock-wrapper">
                    <div className="basketCard__infoBlock_amount">
                    <div onClick={quantityValue === 1 ? () => {} : () => dispatch(removeItem(productID))}className="basketCard__infoBlock_amount-dec">-</div>
                        <div className="basketCard__infoBlock_amount-sum"> 
                            <input 
                            value={quantityValue}
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                            type="number"
                            required/> 
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