import { lazy} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const Dashboard = lazy(() => import('../dashboard/Dashboard'));
const StoryPage = lazy(() => import('../pages/storyPage/StoryPage'));
const ContactsPage = lazy(() => import('../pages/contactsPage/ContactsPage'));
const DeliveryAndPaymentPage = lazy(() => import('../pages/deliveryAndPaymentPage/DeliveryAndPaymentPage'));
const CatalogPage = lazy(() => import('../pages/catalogPage/CatalogPage'));
const SingleProductPage = lazy(() => import('../pages/singleProductPage/SingleProductPage'));
const BasketPage = lazy(() => import('../pages/basketPage/BasketPage'));
const PrivacyPolicyPage = lazy(() => import('../pages/privacyPolicyPage/PrivacyPolicyPage'));



const App = () => {
    return(
        <Router>
                <Routes>
                    <Route path='/' element={<Dashboard />}>
                        <Route index element={<MainPage/>}/>
                        <Route path="story" element={<StoryPage />} />
                        <Route path="contacts" element={<ContactsPage />} />
                        <Route path="deliveryAndPayment" element={<DeliveryAndPaymentPage />} />
                        <Route path="catalog" element={<CatalogPage />} />
                        <Route path="catalog/:productId" element={<SingleProductPage />} />
                        <Route path="basket" element={<BasketPage />} />
                        <Route path="privacypolicy" element={<PrivacyPolicyPage />} />
                        <Route path="*" element={<Page404/>} />
                    </Route>
                </Routes>
        </Router>
    )
}
export default App;