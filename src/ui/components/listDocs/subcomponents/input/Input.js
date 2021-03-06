
import React from 'react';
import './input.css'
export const Input = ({attribute, handleChange, param}) =>{
    return(
        <div className='content-input'>
            <input 
                name={attribute.name}
                placeholder={attribute.placeholder}
                type= {attribute.type}
                onChange={(e)=>handleChange(e.target.name, e.target.value)}
                className='input-filter'  
            />
        </div>
    );
}

// export default Input;