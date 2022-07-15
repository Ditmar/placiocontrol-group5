import React, {useEffect, useState} from 'react';
import './login.scss';
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { PropTypes } from 'prop-types';
import "@fontsource/mulish";
import Swal from "sweetalert2";
import UseForm from "../../hooks/useForm"
const bd ="http://3.138.158.90:8000/server/autenthication/login";
const api = "http://3.138.158.90:8000/server/";
export const  Login=({label}) => {  
    const [form,  handleChangeForm, handlerResetForm ] = UseForm({email:'' , password: ''});
    const {email,password}=form;
    
    const iniciarSesion = (e) => {
        e.preventDefault();
        const dato = {
            email:email,
            password:password
        };
        fetch(bd, {
            method: 'POST',
            body: JSON.stringify(dato),
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if(response ==='Error de login credenciales incorrectas'){
                    Swal.fire({
                        title: 'Err',
                        text: 'Please put correct data',
                    })
                    console.log("Errorres");
                }
                else{
                    Swal.fire({
                        title: 'Congratulationsy',
                        text: 'You are inside',
                   }) 
                    console.log("login");
                }
                    
            }); 
            
    }

     const [shown, setShown] = React.useState(false);
     const switchShown = () => setShown(!shown);
    return(
        <div className="container" >
            <form className="container-login" onSubmit={iniciarSesion}>
                <div className="container-cards">
                    <div className="container-sheet">
                        <p className="plagiarism-tytle">Login Plagio Control</p>
                        <p className="letter_forgot">Forgot password?</p>
                        <div className="logo">
                            <div className="ellipse">
                                <div></div>
                            </div>
                        </div>
                        <p className="plagiarism-style">Plagio Control</p>
                        <p className="text-email">Enter your email and password below</p>
                        <div className="box-email">
                            <label>EMAIL</label>
                            <input type="email" name='email' placeholder="Email address" onChange={handleChangeForm}  ></input>
                            
                        </div>
                        <div className="box-password">
                            <label>PASSWORD</label>
                            <input type={shown ? 'text' : 'password'} name='password' placeholder="Password" onChange={handleChangeForm} > 
                            </input>
                            <span className="icon vector" onClick={switchShown}><Icon icon={eyeOff} /></span>
                            
                        </div>
                            <button type="submit" className="button" ><a>Log in</a></button>  
                        <div className="acount-style">
                            <a href="/login" className="second-end-text">Sign up</a>
                            <span className="first-end-text">No tines una cuenta</span>
                        </div>
                    </div>
                </div> 
            </form>
        </div>
    )
}
Login.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
     isLoading: PropTypes.bool,
     errors: PropTypes.bool,
     label: PropTypes.string
  };