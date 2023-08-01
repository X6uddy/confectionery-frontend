import React from 'react';
import './Header.scss';
import './Header-media.scss';
import cityIcon from '../../resources/icons/header/city.svg';
import phoneIcon from '../../resources/icons/header/phoneicon.svg';
import basketIcon from '../../resources/icons/header/basketicon.svg';
import burgerIcon from '../../resources/icons/header/burgericon.svg'
import logo from '../../resources/icons/header/logo2.png';
import MapModal from '../modals/mapModal/MapModal';
import { useDispatch } from "react-redux";
import { openModal } from '../../store/mapModalSlice';
import Menu from '../menu/Menu';
import { openMenu } from '../../store/menuSlice';



function Header() {
    const dispatch = useDispatch();


    return(
        <>
            <div className="header">
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
                                {/* <img className='header__top_phoneIcon' src={phoneIcon} alt='phoneIcon'/> */}
                                <a href="tel: +78889993344" className="header__top_phoneIcon">
                                    <img className='header__top_phoneIcon' src={phoneIcon} alt='phoneIcon'/>
                                </a>
                                <a href="tel: +78889993344" className="header__top_tag">8 888 999-33-44</a>
                            </div>
                            <div className="header__top_elem">
                                <div className="header__top_basketIcon">
                                    {/* здесь будет отображаться кол-во товаров в корзине */}
                                    <img className='header__top_basketIcon' src={basketIcon} alt='basketIcon'/>
                                    <div className="header__top_basketIcon-counter">24</div> 
                                </div>
                                <div className="header__top_tag">В корзине (4 товара)</div>
                            </div>
                            </div>
                            <img onClick={() => dispatch(openMenu())} className='header__top_burgerIcon' alt='burgerIcon' src={burgerIcon}/>
                        </div>
                    </div>
                </div>
                <div className="header__main">
                    <div className="container">
                        <div className="header__main_wrapper">
                                <div className="header__main_item"><a href='#sda'>Доставка и оплата</a></div>
                                <div className="header__main_item"><a href='#sda'>Оптовые поставки</a></div>
                                <div className='header__main_item'><img className='header__main_logo' src={logo} alt='logo'/></div>
                                <div className="header__main_item"><a href='#sd'>Наша История</a></div>
                                <div className="header__main_item"><a href='#sda'>каталог товаров</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <MapModal />
        </>
    )
}
export default Header