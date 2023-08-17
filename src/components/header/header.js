import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import cityIcon from '../../resources/icons/header/city.svg';
import phoneIcon from '../../resources/icons/header/phoneicon.svg';
import basketIcon from '../../resources/icons/header/basketicon.svg';
import burgerIcon from '../../resources/icons/header/burgericon.svg'
import logo from '../../resources/icons/header/logo2.png';
import MapModal from '../modals/mapModal/MapModal';
import { openModal } from '../../store/mapModalSlice';
import Menu from '../menu/Menu';
import { openMenu } from '../../store/menuSlice';

import './Header.scss';
import './Header-media.scss';




function Header() {
    const dispatch = useDispatch();
    const {totalQuantity} = useSelector(state => state.basketStates);

    function typeOfWords(int, array) {
        return (array = array || ['товар', 'товара', 'товаров']) && array[(int % 100 > 4 && int % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(int % 10 < 5) ? int % 10 : 5]];
    }
    
    return(
        <>
            <div className="header" id='header'>
            <Menu />
                <div className="header__divider">
                    <div className="container">
                        <div className="header__top">
                            <div className='header__top_wrapper'>
                            <div className="header__top_elem">
                                <img className='header__top_cityIcon' onClick={() => dispatch(openModal())} src={cityIcon} alt='cityIcon'/>
                                <div className="header__top_tag" onClick={() => dispatch(openModal())}>Ульяновск..</div>
                            </div>
                            <div className="header__top_elem">
                                <a href="tel: +78889993344" className="header__top_phoneIcon">
                                    <img className='header__top_phoneIcon' src={phoneIcon} alt='phoneIcon'/>
                                </a>
                                <a href="tel: +78889993344" className="header__top_tag">8 888 999-33-44</a>
                            </div>
                            <div className="header__top_elem">
                                <Link to='/basket' className="header__top_basketIcon">
                                    <img className='header__top_basketIcon' src={basketIcon} alt='basketIcon'/>
                                    <div className="header__top_basketIcon-counter">{totalQuantity}</div> 
                                </Link>
                                <Link to='/basket' className="header__top_tag">В корзине ({totalQuantity} {typeOfWords(totalQuantity)})</Link>
                            </div>
                            </div>
                            <img onClick={() => dispatch(openMenu())} className='header__top_burgerIcon' alt='burgerIcon' src={burgerIcon}/>
                        </div>
                    </div>
                </div>
                <div className="header__main">
                    <div className="container">
                        <nav className="header__main_wrapper">
                                <NavLink to="/deliveryAndPayment" className="header__main_item">Доставка и оплата</NavLink>
                                <NavLink to='/contacts' className="header__main_item">Контакты</NavLink>
                                <Link to='/' className='header__main_item'><img className='header__main_logo' src={logo} alt='logo'/></Link>
                                <NavLink to="/story" className="header__main_item">Наша История</NavLink>
                                <NavLink to="/catalog" end className="header__main_item">каталог товаров</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
            <MapModal />
        </>
        )
}
export default Header