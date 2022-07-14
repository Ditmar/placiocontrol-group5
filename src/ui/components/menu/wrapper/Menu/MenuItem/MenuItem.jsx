import React from 'react';
import './MenuItem.css'
export const MenuItem = ({title, image, param}) => {
    return (
        <div className={ param ?  'item-collapsed' : 'item'}>
            <a> 
                <div className={ param ?  'icon-collapsed' : 'icon'}><img className='image-item' src={image}/></div>
                <div className={ param ?  'title-collapsed' : 'title'}>{title}</div>
            </a>
        </div>
        
    )
}

