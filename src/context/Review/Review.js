import React from "react";
import Dropfile from '../../ui/components/R-Components/Dropfile';
import './Review.css';

export const Review = () => {

   
    const onfileChange = (files) => {
         console.log(files);
    }
    
    return (
        <div>
            <div className='text-container'>
                <div className='text'>
                    <p>Suba el documento pdf del trabajo que desea revisar,
                         el sistema verifica similaridad de los documentos contenidos en la base de datos,
                         ya depende del tutor tomar decisiones sobre dicho trabajo</p>
                </div>
            </div>
            <div className='Drag-area'>
                <Dropfile onfileChange = {(files) => onfileChange(files)} />
            </div> 
            <div>
                 <button className="button" type="submit" >Enviar</button>
            </div>   
            
        </div>
        
    )
}

