import { lazy} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// import Dashboard from '../dashboard/Dashboard';
// import Spinner from '../spinner/Spinner';
// import StoryPage from '../pages/storyPage/StoryPage';
// import WholesalePage from '../pages/wholesalePage/WholesalePage';
// import DeliveryAndPaymentPage from '../pages/deliveryAndPaymentPage/DeliveryAndPaymentPage';
// import CatalogPage from '../pages/catalogPage/CatalogPage';
// import SingleProductPage from '../pages/singleProductPage/SingleProductPage';
// import BasketPage from '../pages/basketPage/BasketPage';
// import MainPage from '../pages/MainPage';
// import Page404 from '../pages/404'
// import Header from '../header/Header';
// import Footer from '../footer/Footer';


const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const Dashboard = lazy(() => import('../dashboard/Dashboard'));
const StoryPage = lazy(() => import('../pages/storyPage/StoryPage'));
const WholesalePage = lazy(() => import('../pages/wholesalePage/WholesalePage'));
const DeliveryAndPaymentPage = lazy(() => import('../pages/deliveryAndPaymentPage/DeliveryAndPaymentPage'));
const CatalogPage = lazy(() => import('../pages/catalogPage/CatalogPage'));
const SingleProductPage = lazy(() => import('../pages/singleProductPage/SingleProductPage'));
const BasketPage = lazy(() => import('../pages/basketPage/BasketPage'));


const App = () => {
    return(
        <Router>
                <Routes>
                    <Route path='/' element={<Dashboard />}>
                        <Route index element={<MainPage/>}/>
                        <Route path="story" element={<StoryPage />} />
                        <Route path="wholesale" element={<WholesalePage />} />
                        <Route path="deliveryAndPayment" element={<DeliveryAndPaymentPage />} />
                        <Route path="catalog" element={<CatalogPage />} />
                        <Route path="catalog/:productId" element={<SingleProductPage />} />
                        <Route path="basket" element={<BasketPage />} />
                        <Route path="*" element={<Page404/>} />
                    </Route>
                </Routes>
        </Router>
    )
}
export default App;