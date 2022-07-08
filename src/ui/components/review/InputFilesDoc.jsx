import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PDFUpload from './assets/PDFUpload.jpg';


const InputFilesDoc = ({ fileChange }) => {
    const wrapRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    const onDragEnter = () => wrapRef.current.classList.add('draging');
    const onDragLeave = () => wrapRef.current.classList.remove('draging');
    const onDrop = () => wrapRef.current.classList.remove('draging');
    const handleChange = (event) => {
        const newFile = event.target.files[0];
        if (newFile) {
            const updateList = [...fileList, newFile];
            setFileList(updateList)
            //console.log(fileList)
            fileChange(updateList);
        }
    }
    const handleRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        fileChange(updatedList);

    }
    return (
        <div
            className="containerWrapper"
            ref={wrapRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
        >

                <input
                    type="file"
                    onChange={handleChange}
                />
                {
                    fileList.length > 0 ? (
                        <div className="containerFiles">
                            {
                                fileList.map((files, index) => (
                                    <div key={index} className="containerUpload">

                                        <img src={PDFUpload} alt="" />

                                        <p>{`${files.name} ${(files.size / 1000000).toFixed(2)} MB`}</p>
                                        <button className="btndelete" onClick={handleRemove}>X</button>
                                    </div>

                                ))
                            }
                        </div>
                    )
                        : null
                }
            </div>
    )
}
InputFilesDoc.propTypes ={
    fileChange: PropTypes.func.isRequired,
}

export default InputFilesDoc