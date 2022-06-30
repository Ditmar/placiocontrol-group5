import React from 'react';
import './Label.css';

const Label = ({text, param}) => {
    return (
        <div>
            <label className={ param ? 'label-alert' : 'label-content'}>{text}</label>
        </div>
    )
};

export default Label;