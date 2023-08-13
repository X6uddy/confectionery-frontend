import { useParams } from "react-router-dom";
import {useGetOneProductQuery} from '../../../store/productsApiSlice';

import Spinner from '../../spinner/Spinner';

import './SingleProductPage.scss';
import './singleProductPage-media.scss';


const SingleProductPage = () => {

    const {productId} = useParams();
    const {data = [], isLoading} = useGetOneProductQuery(productId);
    if(isLoading) {
        <Spinner/>
    } else {
        return(
            data.map(item => {
                const {title, photoPath, proteins, fats, carbohydrates, energy, expiration, price, composition, _id} = item;
                return (
                    <div key={_id} className="container">
                        <div className="single-product">
                            <img src={`http://127.0.0.1:3004${photoPath}`} alt={title} className="single-product__image" />
                            <div className="single-info">
                                <h2 className="single-info__title">{title}</h2>
                                <h3>Об изделии:</h3>
                                <div className="single-info__weight">Масса нетто: <span></span></div>
                                <div className="single-info__expiration">Срок годности: <span>{expiration} суток</span></div>
                                <div className="single-info__nutritional">Энергетическая ценность: <span>{energy} ккал</span></div>
                                <div className="single-info__proteins">Пищевая ценность в 100г: <span>  белки: {proteins};
                                                                                                жиры: {fats};
                                                                                                углеводы: {carbohydrates}</span></div>
                                <div className="single-info__composition">Состав: <span>{composition}</span></div>
                                <div className="single-info__price">
                                    <div className="single-info__price-value"><span>{price} руб</span></div>
                                    <button className="single-info__add">Добавить в корзину</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}
export default SingleProductPage