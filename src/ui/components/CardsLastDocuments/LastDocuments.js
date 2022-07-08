import React from 'react';
import './bootstrap.min.css';
import './LastDocuments.css';
import TitleComponent from './subcomponents/TitleComponent';
import ListComponent from './subcomponents/ListComponent';
const LastDocuments = () =>{
    return <div class="contenedor">
        <ul className="list-group">   
            < TitleComponent title="Ultimos Documentos Publicados" group="Suport"/> 
             < ListComponent description="Analisis de la investigacion sobre radio en bolivia ..." pages="321" />   
             < ListComponent description="Analisis bibliometrico y de redes sociales en tesis ... " pages="120" />   
            <li class="list-group-item d-flex justify-content-between align-items-center">
                
            </li>
        </ul>
    </div>
}
export default LastDocuments;