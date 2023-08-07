import React from "react";

import ProductCard from "../../productCard/ProductCard";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadNextProducts, fetchProducts, fetchSumProducts} from "../../../store/catalogSlice";
import Spinner from '../../spinner/Spinner';
import error503 from '../../../resources/img/catalogPage/error503.jpg';

import './CatalogPage.scss'


const CatalogPage = () => {
    
    const dispatch = useDispatch()
    const {dataCatalog, skip, catalogError,isLoading, sumOfProducts} = useSelector(state => state.catalogStates);
    useEffect(() => {   
            if(skip === 0) {
                dispatch(fetchProducts(skip))
                dispatch(loadNextProducts())
                dispatch(fetchSumProducts())
            }
    },[skip,dispatch])

    
    return(
        <div className="catalog">
            <div className="container">
                <div className="catalog__title">Каталог товаров</div>
                <div className="catalog__filter-wrapper">
                    <div className="catalog__filter_item"><span>Кексы</span></div>
                    <div className="catalog__filter_item"><span>Рогалики</span></div>
                    <div className="catalog__filter_item"><span>Сдобное</span></div>
                    <div className="catalog__filter_item"><span>Торты</span></div>
                </div>
                <div className="catalog__products-wrapper">
                    {catalogError ? <img alt="error503" style={{width: '80%'}} src={error503} /> : ''}
                    {isLoading ? <Spinner /> : ''}
                        {dataCatalog.map((product) => {
                            return (
                                <div key={product._id} className="catalog__products_item">
                                    <ProductCard product={product} />
                                </div>
                            )
                        })} 
                </div>
                {!(skip >= sumOfProducts) ? <button className="catalog__btn" onClick={() => {
                    dispatch(loadNextProducts())
                    dispatch(fetchProducts(skip))
                    }}>Показать ещё</button>: ''}
            </div>  
        </div>
    )
}
export default CatalogPage