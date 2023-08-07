import React from "react";

import ProductCard from "../../productCard/ProductCard";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadNextProducts, fetchProducts} from "../../../store/catalogSlice";
import { useGetSumProductsQuery } from "../../../store/productsApiSlice";

import './CatalogPage.scss'


const CatalogPage = () => {
    
    const dispatch = useDispatch()
    const catalogStates = useSelector(state => state.catalogStates);
    const {data} = useGetSumProductsQuery();
    useEffect(() => {   
            if(catalogStates.skip === 0) {
                dispatch(fetchProducts(catalogStates.skip))
                dispatch(loadNextProducts())
            }
    },[catalogStates.skip,dispatch])

    
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
                        {catalogStates.data.map((product) => {
                            return (
                                <div key={product._id} className="catalog__products_item">
                                    <ProductCard product={product} />
                                </div>
                            )
                        })} 
                </div>
                {!(catalogStates.skip >= data) ? <button className="catalog__btn" onClick={() => {
                    dispatch(loadNextProducts())
                    dispatch(fetchProducts(catalogStates.skip))
                    }}>Показать ещё</button>: ''}
            </div>  
        </div>
    )
}
export default CatalogPage