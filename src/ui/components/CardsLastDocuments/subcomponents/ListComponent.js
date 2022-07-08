import React from 'react';

const ListComponent = (props) =>{

    return(
        <li class="list-group-item d-flex justify-content-between align-items-center">   
                {props.description}        
            <div class="cont"><a href="#" class="align-items-right">Ver detalles</a><span class="opacity-50" >{props.pages} pj.</span> </div>
        </li>
    )
}
export default ListComponent;