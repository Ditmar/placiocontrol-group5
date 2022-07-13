import React , { useRef, useState } from 'react';

import PropTypes from 'prop-types';
import  {imageConfig} from './imageConfig/Icon_pdf';
import { FaTrash } from 'react-icons/fa';
import '../../../context/Review/Review.css';


const Dropfile = ({Uploadfile,onfileChange}) => {

    const wrappRef = useRef(null);
    const [ fileList , setFileList] = useState([]);

    const onDragEnter = () => wrappRef.current.classList.add('dragover');

    const onDragLeave = () => wrappRef.current.classList.remove('dragover');

    const onDrop = () => wrappRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {

        const newFile = e.target.files[0];
        if (newFile){
            const upList = [ ...fileList , newFile];
            setFileList(upList);
            onfileChange(upList);

        }
    }
     const fileRemove =(file) =>{
        const upList =[...fileList];
        upList.splice(fileList.indexOf(file), 1);
        setFileList(upList);
        onfileChange(upList);

     }
     return(
        <div className='drop-file' ref={wrappRef}

            onDragEnter ={onDragEnter}
            onDragLeave ={onDragLeave}
            onDrop ={onDrop}>
         {Uploadfile ? (<div className='Preview-Dropfile-item'>
                <div className='Preview-Dropfile-item-in'>
                    <div className='Dropfile-imagen'>
                    <img src="/pdf.png" alt="" />
                    </div>
                    <p className='fileName'>tares.pdf </p>
                    <br />
                    <p className='fileSize'> 0.15Mb</p>
                    <div className='Dropfile-item-delete'>
                        <FaTrash/>
                    </div>
                </div>
            </div>) : (<input  type='file'  onChange={onFileDrop}
            />)}

            {
                fileList.length > 0 ? (


                    <div className='Preview-Dropfile'>
                        {
                            fileList.map((item, index) => (

                                <div key={index} className='Preview-Dropfile-item'>

                                    <div className='Preview-Dropfile-item-in'>
                                        <div className='Dropfile-imagen'>
                                        <img src={imageConfig[item.type.split('/')[1]] || imageConfig['pdf']} alt="" />
                                        </div>
                                        
                                        <p className='fileName'>{item.name} </p>
                                        <br />
                                        <p className='fileSize'>{(item.size / 1000000).toFixed(2)}MB</p>
                                        
                                        

                                        <div className='Dropfile-item-delete'>
                                            <FaTrash onClick={() => fileRemove(item)}
                                            />
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>

    );
}
Dropfile.propTypes = {
    Uploadfile:PropTypes.bool,
    onfileChange: PropTypes.func
}

export default Dropfile;