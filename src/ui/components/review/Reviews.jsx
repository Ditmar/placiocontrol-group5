import React, { useState } from 'react'
import InputFilesDoc from './InputFilesDoc';
import './Review.css';
const Reviews = () => {
    const [files, setFiles] = useState([]);

    const fileChange = (files) => {
        setFiles(files);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(files)
    }
    return (
        <div className="container">
            <form className='formFile' onSubmit={handleSubmit}>
                <p className="heading">
                    Suba el documento pdf del trabajo que desea revisar,
                    el sistema verifica similaridad de los documentos contenidos
                    en la base de datos, ya depende del tutor tomar decisiones sobre dicho trabajo.
                </p>
                <InputFilesDoc fileChange={(files) => fileChange(files)} />

                <button className="btnSubmit" type="submit" >Enviar</button>
            </form>
        </div>
    )
}

export default Reviews