import React from 'react'

import Slider from '../swiper/Slider';
import Reasons from '../reasons/Reasons';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';


function MainPage() {

    return(
        <>
            <div className="promo">
                <div className="container">
                    <h1 className="promo__title">
                        Приветствуем вас на виртуальных просторах кондитерской фабрики "ИП Курушин О.А"
                    </h1>
                    <p className="promo__descr">
                        На протяжении многих лет наша фабрика с любовью и страстью создает настоящие произведения искусства в мире кондитерских изделий. 
                        Каждый десерт, каждое пирожное – это результат непрерывных исследований, слияния традиций и новаторских подходов. 
                        Мы ставим перед собой цель – не только порадовать ваши вкусовые рецепторы, но и создать впечатление, которое будет оставаться с вами на долгие годы.
                    </p>
                </div>
            </div>
            <ErrorBoundary>
                <Slider/>
            </ErrorBoundary>

            <ErrorBoundary>
                <Reasons/>  
            </ErrorBoundary>
        </>
    )
}
export default MainPage;