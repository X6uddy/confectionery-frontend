import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {useGetOneProductQuery} from '../../../store/productsApiSlice';
import { addToBasket, removeFromBasket } from "../../../store/basketSlice";
import Spinner from '../../spinner/Spinner';

import './SingleProductPage.scss';
import './singleProductPage-media.scss';

import basketPhoto from '../../../resources/icons/productCard/cardBasket_white.png';

const SingleProductPage = () => {

    const {productId} = useParams();
    const {data = [], isLoading} = useGetOneProductQuery(productId);

    const basket = useSelector(state => state.basket);
    const dispatch = useDispatch();

    // const onAddToBasket = () => {
    //     dispatch(addToBasket({productId}))
    //     console.log({productId})
    //     console.log(basket)
    // }

    const handleAddToCart = () => {
        dispatch(addToBasket({ productId, quantity: 1}));
    };
    
    const handleRemoveFromCart = () => {
        dispatch(removeFromBasket({ productId, quantity: 1 }));
        console.log(basket)
    };
    
    const basketItem = basket.find(item => item.productId === productId);
    const quantityInCart = basketItem ? basketItem.quantity : 0;

    // const isInCart = basket.includes(productId);

    if(isLoading) {
        <Spinner/>
    } else {
        return(
            data.map(item => {
                const {title, photoPath, proteins, fats, carbohydrates, energy, expiration, price, composition, _id} = item;
                return (
                    <div key={_id} className="container">
                        <h2 className="single-info__title">{title}</h2>
                        <div className="single-product">
                            <img src={`http://127.0.0.1:3004${photoPath}`} alt={title} className="single-product__image" />
                            <div className="single-info">
                                {/* <h2 className="single-info__title">{title}</h2> */}
                                {/* <h3>Об изделии:</h3> */}
                                <div className="single-info-wrapper">
                                    <div className="single-info__weight">Масса нетто: <span></span></div>
                                    <div className="single-info__expiration">Срок годности:<span>{expiration} суток</span></div>
                                    <div className="single-info__nutritional">Энергетическая ценность: <span>{energy} ккал</span></div>
                                    <div className="single-info__proteins">Пищевая ценность в 100г: <span className="proteins"><br/>
                                                                                                    белки:    {proteins}<br/>
                                                                                                    жиры:    {fats}<br/>
                                                                                                    углеводы:    {carbohydrates}</span></div>
                                    <div className="single-info__composition">Состав: <span>{composition}</span></div>
                                </div>
                            </div>
                            <div className="single-info_price">
                                    <div className="single-info_price_value" onClick={handleRemoveFromCart}>{price}</div>
                                    {quantityInCart}
                                    <button onClick={handleAddToCart} className="single-info__add">
                                        <img src={basketPhoto} alt='basketIcon' className="single-info__add_icon"/>
                                        <div className="single-info__add_text">Добавить в корзину</div>
                                    </button>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}
export default SingleProductPage