import React, {useState} from 'react';
import {Logo} from './Logo/Logo'
import {Menu} from './Menu/Menu'
export const Wrapper = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        
        <div>
           
            <Logo param={showMobileMenu}/>
            <div onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Menu param={showMobileMenu}/>
            
        </div>
    )
}