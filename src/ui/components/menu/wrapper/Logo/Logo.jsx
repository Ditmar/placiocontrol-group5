import React from 'react';
import './Logo.css'
export const Logo = ({param}) => {
    
    return (
        <div className='container-logo'>
            <div className={ param ?  'icon-logo-collapsed' : 'icon-logo'}><img className='image-logo' src='https://cdn-icons-png.flaticon.com/128/6819/6819096.png'/></div>
            <div className={ param ?  'title-logo-collapsed' : 'title-logo'}><span>Plagio Control</span></div>
        </div>
    )
}