import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import ProductCard from "../../productCard/ProductCard";
import { loadNextProducts, fetchProducts, fetchSumProducts} from "../../../store/catalogSlice";

import Spinner from '../../spinner/Spinner';
import error503 from '../../../resources/img/catalogPage/error503.jpg';
import arrowUp from '../../../resources/icons/catalogPage/arrowup.svg';

import './CatalogPage.scss'
import './CatalogPage-media.scss'


const CatalogPage = () => {
    
    const dispatch = useDispatch();
    const {dataCatalog, skip, catalogError,isLoading, sumOfProducts} = useSelector(state => state.catalogStates);
    const [arrowVisable, setArrowVisable] = useState(false);



    useEffect(() => {
        const arrowScroll = () =>{
            if(window.scrollY >= 800){
                setArrowVisable(true)
            }else{
                setArrowVisable(false)
            }
        };
        window.addEventListener('scroll', arrowScroll);
        if(skip === 0) {
            dispatch(fetchProducts(skip))
            dispatch(loadNextProducts())
            dispatch(fetchSumProducts())
        };

        return () => {
            window.removeEventListener('scroll', arrowScroll);
        }

    },[skip,dispatch])

    const scrollToTop = () => {
        const anchorArrow = document.getElementById('header');
        anchorArrow.scrollIntoView({behavior : 'smooth'})
    }

    
    return(
        <>
            <Helmet>
                <meta name="Каталог товаров" content="Здесь представлен каталог товаров Кондитерской фабрики 'ИП Курушин А.О'. 
                Вы можете найти здесь огромное разнообразие кондитерских изделий: кексы, печенье, торты, эклеры,"/>

                <meta name="keywords" content="Каталог товаров, Каталог кондитерских изделий, Кондитерские товары, Каталог сладостей, 
                Выбор кондитерских изделий, Кондитерский ассортимент, Покупка кондитерских товаров, Сладкий каталог, Онлайн-магазин кондитерских изделий,
                Кондитерские подарки, Кондитерские акции" />
                
                <title>Каталог товаров</title>
            </Helmet>

            <div className="catalog">
                <div className="container">
                    <h1 className="catalog__title">Каталог товаров</h1>
                    <div className="catalog__products-wrapper">
                        <img
                            alt="arrowUp" 
                            onClick={scrollToTop} style={
                            {
                                visibility: arrowVisable ? 'visible': 'hidden'
                            }
                            } 
                            src={arrowUp} 
                            className="catalog__arrowUp" 
                        />
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
        </>
    )
}
export default CatalogPage