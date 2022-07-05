import React from 'react';
export const MenuItem = ({title, image, param}) => {
    return (
        <div>
            <a> 
                <div><img src={image}/></div>
                <div>{title}</div>
            </a>
        </div>
        
    )
}

