import React from "react";
import './CatalogPage.scss'


const CatalogPage = () => {

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
                    <div className="catalog__products_item">item</div>
                </div>
                <button className="catalog__btn">Показать ещё</button>
            </div>  
        </div>
    )
}
export default CatalogPage