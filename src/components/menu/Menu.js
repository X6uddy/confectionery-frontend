/* eslint-disable jsx-a11y/anchor-has-content */
import { React } from 'react';
import './Menu.scss';
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu } from '../../store/menuSlice';
import logo from '../../resources/icons/header/logo2.png';
import closeIcon from '../../resources/icons/header/closeIcon.svg';
import {NavLink ,Link} from 'react-router-dom';


const Menu = () => {
    const menuState = useSelector(state => state.menuState.menuCondition)
    const dispatch = useDispatch();

    const menuClasses = ['menu'];
    const menuOverlay = ['menu__overlay']
    if(menuState){ 
        menuOverlay.push('menu__overlay_active')
        menuClasses.push('menuIsOpen');
    }

    return(
        <div className={menuOverlay.join(' ')} >
            <div className={menuClasses.join(' ')} onClick={() => dispatch(closeMenu())}>
                <div className='menu__wrapper' onClick={e => e.stopPropagation()}>
                    <img src={closeIcon}  alt='close' className='menu__close' onClick={() => dispatch(closeMenu())} />
                    <Link className='menu__logo_linkWrapper' to="/"><img src={logo} alt='logo' className='menu__logo' onClick={() => dispatch(closeMenu())} /></Link>
                    <ul className='menu__nav'>
                    <li className='menu__nav-item' onClick={() => dispatch(closeMenu())}><NavLink to="/deliveryAndPayment" href='#sda' className='menu__nav-ref'>Доставка и оплата</NavLink></li>
                        <li className='menu__nav-item' onClick={() => dispatch(closeMenu())}><NavLink  to='/wholesale' className='menu__nav-ref' >Оптовые поставки</NavLink></li>
                        <li className='menu__nav-item' onClick={() => dispatch(closeMenu())}><NavLink  to="/story" className='menu__nav-ref'>Наша история</NavLink></li>
                        <li className='menu__nav-item' onClick={() => dispatch(closeMenu())}><NavLink to="catalog" className='menu__nav-ref'>Каталог товаров</NavLink></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Menu