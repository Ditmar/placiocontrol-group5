import React from 'react';
import './imageAvatar.css'
export const ImageAvatar= ({urlImage, sizeWidth, sizeHeight}) =>{

    return(
        <div className='content-image'>
            <img src={urlImage} width={sizeWidth} height={sizeHeight} />
        </div>
    );
}