import React,{ useEffect, useState } from 'react';
import TesisServices from './List_Tesis';


import './listarTesis.scss'
import { TableListTble } from './tableListTesis/TableListTesis';
import  { Input } from './subcomponents/input/Input'

export const ListDocsUi=()=>{
    const [listTesis, setLisTesis] = useState([]);
    const [title, setTitle] = useState('');
    const [autor, setAutor] = useState('');
    const [date, setDate] = useState('');

    useEffect(()=>{
        let listT =  TesisServices.listarTesis();
        setLisTesis(
            listT
        );
    },[])

    function handleChange(name, value) {
        if (name === 'title') {
            setTitle(value)
        } 
        if ( name === 'autor' ) {
            setAutor(value)
        } 
        if ( name === 'date' ) {
            setDate(value)
        }
    }

    return(
        <div className='content-listar-tesis'>
            <div className='content-header-secction'>
                <div className='subtile-list'>Lista</div>
                <div className='content-box'>
                    <Input  
                        attribute={{
                            name:'title',
                            type:'text',
                            placeholder:''
                        }}
                        handleChange={handleChange}
                        param=""
                    />
                    <Input  
                        attribute={{
                            name:'autor',
                            type:'text',
                            placeholder:''
                        }}
                        handleChange={handleChange}
                        param=""
                    />
                    <Input  
                        attribute={{
                            name:'date',
                            type:'text',
                            placeholder:''
                        }}
                        handleChange={handleChange}
                        param=""
                    />
                </div>
                <div className='content-filters'>
                    <div className='option-filters'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                            <path d='M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z' />
                        </svg>
                        <div>sort</div> 
                    </div>
                    <div className='option-filters'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'>
                            <path stroke-linecap='round' stroke-linejoin='round' d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z' />
                        </svg>
                        <div>filter</div> 
                    </div>
                </div>
            </div>
            <div className='content-table-component'>
                <TableListTble listTesis={listTesis} />
            </div>
        </div>
    );
}
