import React from "react";

import ProductCard from "../../productCard/ProductCard";
import { useGetProductsQuery } from "../../../store/productsApiSlice";

import './CatalogPage.scss'


const CatalogPage = () => {
    const {data = [], isLoading, error} = useGetProductsQuery()

    if(isLoading){
        console.log('Loading')
    }


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
                    <div className="catalog__products_item">
                        <ProductCard />
                    </div>
                </div>
                <button className="catalog__btn">Показать ещё</button>
            </div>  
        </div>
    )
}
export default CatalogPage