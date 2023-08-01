import React from 'react'

import Slider from '../swiper/Slider';
import Reasons from '../reasons/Reasons';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';


function MainPage() {

    return(
        <>
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