import { PropTypes } from 'prop-types';
import { React } from 'react';
import './btnDownloader.css'

export const BtnDownload = ({label, handleClick, backgroundColor, isShadow, size}) => {
    let scale = 1;
    const normalSize = 0.1;
    if (size === 'lg') scale = 1.0;
    let styles = {
        position:'relative !important',
        padding: `0.75rem ${normalSize * scale}rem`,
        backgroundColor,
        border: 'none',
        color: '#fff',
        fontFamily: 'Arial',
        fontStyle: 'normal',
        width:'90px',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '1px',
        borderRadius: '1rem',
        cursor:'pointer',
        textTransform:'uppercase'
    }
    if (isShadow) {
        styles = {...styles, boxShadow: '0px 4px 12px rgba(55, 81, 255, 0.24)'}
    }
    return (
        <div  className={label} onClick={handleClick} style={styles}>
            {label}
        </div>
    )
}

BtnDownload.prototype = {
    label: PropTypes.string,
    style: PropTypes.string,
    handleClick: PropTypes.func,
    isShadow: PropTypes.boolean,
    backgroundColor: PropTypes.string
}