import React from 'react';
import './login.scss';
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { useState } from 'react';
import useForm from '../../hooks/useForm';
import { PropTypes } from 'prop-types';
import "@fontsource/mulish";
export const  Login=({label}) => {
    const [password, setPassword] = React.useState('');
    const [shown, setShown] = React.useState(false);
    const switchShown = () => setShown(!shown);
    const onChange = ({ currentTarget }) => setPassword(currentTarget.value);
    const [ handlerChangeForm] = useForm({email:"" , password: ""});
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return(
        <div className="container" >
            <form className="container-login" onSubmit={onSubmit}>
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
                            <input type="email" placeholder="Email address"></input>
                        </div>
                        <div className="box-password">
                            <label>PASSWORD</label>
                            <input type={shown ? 'text' : 'password'} placeholder="Password" value={password} onChange={onChange}></input>
                            <span className="icon vector" onClick={switchShown} ><Icon icon={eyeOff} /></span>
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