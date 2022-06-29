import './LastDocuments.css';
const LastDocuments = () =>{
    return <div class="contenedor">

        <ul class="list-group">   
            <li class="list-group-item-first d-flex justify-content-between align-items-center">
                <div><h3>Ultimos Documentos Publicados</h3>
                    <h5><span class="opacity-25">Group: </span> <span>Suport</span></h5></div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Analisís de la investigación sobre la radio en Bolivia ...
                <div class="cont"><a href="#" class="align-items-right">Ver detalles</a><span class="opacity-50" >   321 Pag.</span> </div>               
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Analisis bibliometrico y de redes sociales en tesis ...
                <div class="cont"><a href="#" class="align-items-right">Ver detalles</a><span class="opacity-50" >   120 Pag.</span> </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                
            </li>
        </ul>
    </div>
}
export default LastDocuments;