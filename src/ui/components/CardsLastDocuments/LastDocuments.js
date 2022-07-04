import React from 'react';
import './bootstrap.min.css';
import './LastDocuments.css';

const LastDocuments = () =>{
    const documnets1 = {

        title: 'Analisís de la investigación sobre la radio en Bolivia ...',
        pages: '321 paj.',
    };
    const documnets2 = {

        title: 'Analisis bibliometrico y de redes sociales en tesis ...',
        pages: '120 paj.',
    };
   
    return <div class="contenedor">

        <ul className="list-group">   
            <li className="list-group-item-first d-flex justify-content-between align-items-center">
                <div><h3>Ultimos Documentos Publicados</h3>
                    <h5><span className="opacity-25">Group: </span><span>Suport</span></h5></div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
               { documnets1.title}
                <div class="cont"><a href="#" class="align-items-right">Ver detalles</a><span class="opacity-50" > {documnets1.pages}</span> </div>               
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                {documnets2.title}
                <div class="cont"><a href="#" class="align-items-right">Ver detalles</a><span class="opacity-50" >  {documnets2.pages}</span> </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                
            </li>
        </ul>
    </div>
}
export default LastDocuments;