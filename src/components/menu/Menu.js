/* eslint-disable jsx-a11y/anchor-has-content */
import { React } from 'react';
import './Menu.scss';
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu } from '../../store/menuSlice';
import logo from '../../resources/icons/header/logo2.png';
import closeIcon from '../../resources/icons/header/closeIcon.svg';
import {Link, NavLink} from 'react-router-dom';
import muffinIcon from '../../resources/icons/menu/muffinicon.svg';


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
                        <li className='menu__nav-item' onClick={() => dispatch(closeMenu())}>
                            <NavLink to="/deliveryAndPayment" className={({isActive}) => isActive? 'menu__nav_link activeLinkMenu':'menu__nav_link'}>
                                    <img className='menu__nav_muffin' alt='muffinicon' src={muffinIcon} />
                                    <div className='menu__nav-ref'>Доставка и оплата</div>
                            </NavLink>
                        </li>
                        <li className='menu__nav-item' onClick={() => dispatch(closeMenu())}>
                            <NavLink to="/wholesale" className={({isActive}) => isActive? 'menu__nav_link activeLinkMenu':'menu__nav_link'}>
                                    <img className='menu__nav_muffin' alt='muffinicon' src={muffinIcon} />
                                    <div className='menu__nav-ref'>оптовые поставки</div>
                            </NavLink>
                        </li>
                        <li className='menu__nav-item' onClick={() => dispatch(closeMenu())}>
                            <NavLink to="/story" className={({isActive}) => isActive? 'menu__nav_link activeLinkMenu':'menu__nav_link'}>
                                    <img className='menu__nav_muffin' alt='muffinicon' src={muffinIcon} />
                                    <div className='menu__nav-ref'>Наша история</div>
                            </NavLink>
                        </li>
                        <li className='menu__nav-item' onClick={() => dispatch(closeMenu())}>
                            <NavLink to="/catalog" className={({isActive}) => isActive? 'menu__nav_link activeLinkMenu':'menu__nav_link'}>
                                    <img className='menu__nav_muffin' alt='muffinicon' src={muffinIcon} />
                                    <div className='menu__nav-ref'>Каталог товаров</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Menu