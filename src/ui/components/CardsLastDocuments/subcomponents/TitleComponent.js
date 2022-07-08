import React from 'react';

const TitleComponent = (props) => {

    return(
        
        <li className="list-group-item-first d-flex justify-content-between align-items-center">
            <div><h3>{props.title}</h3>
                <h5><span className="opacity-25">Group:  </span><span>{props.group}</span></h5></div>
        </li>
    )
}
export default TitleComponent;