import React from 'react';
import './CardStyle.css'

const CardDocument = ({AuthorName, TittleDescription, PageNumber, Cover}) => {
    return (
        <div className='overall'>
            <div className='cardDocument'>
                <div className='overalltext'>
                    <p className='author'>Autor. {AuthorName}</p>
                    <p className='description'>{TittleDescription}</p>
                    <p className='page'>{PageNumber} Pag.</p>
                    <hr className='line'></hr>
                </div>
                <div className='imagedetails'>
                    <p className='details'>Ver detalles</p>
                    <img className='cover' src={Cover} alt='cover not found'/>
                </div>
            </div>
        </div>
    );
}
export default CardDocument;