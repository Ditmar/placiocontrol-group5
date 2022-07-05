import React from 'react';

import CardDocument from './CardDocument';

function SuperDocumentCard(){
    return (
        <div className='container-CardDoc'>
            <CardDocument 
            AuthorName='Ing. Raul Gomez' 
            TittleDescription='Análisis de la investigación sobre radio en Bolivia ...' 
            PageNumber='321' 
            Cover='https://i.postimg.cc/Kz2nLfcw/port.png'/>
        </div>
    )
}
export default SuperDocumentCard; 