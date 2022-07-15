import React, {useState} from 'react';
import {Logo} from './Logo/Logo'
import {Menu} from './Menu/Menu'
import './Wrapper.css'
export const Wrapper = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        
        <div className={ showMobileMenu ?  'container-wrapper-collapsed' : 'container-wrapper'}>
           
            <Logo param={showMobileMenu}/>
            <div className={ showMobileMenu ?  'expansion-logo' : 'expansion-logo-collapsed'} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div className='logo-hamburger'></div>
                <div className='logo-hamburger'></div>
                <div className='logo-hamburger'></div>
            </div>
            <Menu param={showMobileMenu}/>
            
        </div>
    )
}