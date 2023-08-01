/* eslint-disable jsx-a11y/anchor-has-content */
import { React } from 'react';
import './Menu.scss';
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu } from '../../store/menuSlice';
import logo from '../../resources/icons/header/logo2.png'
import closeIcon from '../../resources/icons/header/closeIcon.svg'


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
                    <img src={logo} alt='logo' className='menu__logo' onClick={() => dispatch(closeMenu())} />
                    <ul className='menu__nav'>
                    <li className='menu__nav-item' onClick={() => dispatch(closeMenu())}><a href='#sda' className='menu__nav-ref' to="shop">Shop</a></li>
                        <li className='menu__nav-item' onClick={() => dispatch(closeMenu())}><a href='#sda' className='menu__nav-ref' to="impact">Our impact</a></li>
                        <li className='menu__nav-item' onClick={() => dispatch(closeMenu())}><a href='#sda' className='menu__nav-ref' to="journal">Journal</a></li>
                        <li className='menu__nav-item' onClick={() => dispatch(closeMenu())}><a href='#sda' className='menu__nav-ref' to="contacts">Contacts</a></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Menu