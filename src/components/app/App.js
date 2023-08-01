import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));


const App = () => {
    return(
        <Router>
            <Header/>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>

                    <Route path="*" element={<Page404/>} />
                </Routes>
            </Suspense>
            <Footer/>
        </Router>
    )
}
export default App;