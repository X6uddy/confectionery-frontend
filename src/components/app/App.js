import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard';
import Spinner from '../spinner/Spinner';
import StoryPage from '../pages/storyPage/StoryPage';
import WholesalePage from '../pages/wholesalePage/WholesalePage';
import DeliveryAndPaymentPage from '../pages/deliveryAndPaymentPage/DeliveryAndPaymentPage';
import CatalogPage from '../pages/catalogPage/CatalogPage';
import SingleProductPage from '../pages/singleProductPage/SingleProductPage';
import BasketPage from '../pages/basketPage/BasketPage'


const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));


const App = () => {
    return(
        <Router>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path='/' element={<Dashboard />}>
                        <Route index element={<MainPage/>}/>
                        <Route path="*" element={<Page404/>} />
                        <Route path="story" element={<StoryPage />} />
                        <Route path="wholesale" element={<WholesalePage />} />
                        <Route path="deliveryAndPayment" element={<DeliveryAndPaymentPage />} />
                        <Route path="catalog" element={<CatalogPage />} />
                        <Route path="catalog/:productId" element={<SingleProductPage />} />
                        <Route path="basket" element={<BasketPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    )
}
export default App;