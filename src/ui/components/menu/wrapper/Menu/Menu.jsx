import React from 'react';
import {MenuItem} from './MenuItem/MenuItem'
export const Menu = ({param}) => {
    return (
        <div>
            <MenuItem title='Inicio' image='https://cdn-icons-png.flaticon.com/128/7598/7598798.png' param={param}/>
            <MenuItem title='Trabajo' image='https://cdn-icons-png.flaticon.com/128/1063/1063376.png' param={param}/>
            <MenuItem title='Revisar Tesis' image='https://cdn-icons-png.flaticon.com/128/7708/7708177.png' param={param}/>
            <MenuItem title='Listar Tesis' image='https://cdn-icons-png.flaticon.com/128/681/681443.png' param={param}/>
            <MenuItem title='Publicar Tesis' image='https://cdn-icons-png.flaticon.com/128/7467/7467676.png' param={param}/>
            <MenuItem title='Reportes Generales' image='https://cdn-icons-png.flaticon.com/512/1508/1508964.png' param={param}/>
            <br></br>
            <MenuItem title='Configuraciones' image='https://cdn-icons-png.flaticon.com/512/2099/2099058.png' param={param}/>
        </div>
    )
}