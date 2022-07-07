import React from 'react';
import PropTypes from 'prop-types';
import './imageAvatar.css';

export const ImageAvatar= ({urlImage, sizeWidth, sizeHeight}) =>{

    return(
        <div className='content-image' style={{width:sizeWidth,height:sizeHeight}}>
            <img src={urlImage} />
        </div>
    );
}

ImageAvatar.prototypes = {
    urlImage: PropTypes.String,
    sizeHeight: PropTypes.String,
    sizeHeight: PropTypes.String
}