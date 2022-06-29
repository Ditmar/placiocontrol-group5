import React, { Component } from 'react';
import './login.scss';
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { useState } from 'react';
import "@fontsource/mulish";
export const  Login=() => {
    const [type,setType]=useState("password");
    const [icon,setIcon]=useState(eyeOff);
    const handleToggle=()=>{
        if(type==="password"){
            setIcon(eye);
            setType("text");
        }
        else{
            setIcon(eyeOff);
            setType("password");
        }
    }
    return(
        <div className="bo">
            <div className="login">
                <div className="cards">
                    <div className="sheet">
                        <p className="pla">Login Plagio Control</p>
                        <p className="for">Forgot password?</p>
                        <div className="logo">
                            <div className="elipse">
                                <div></div>
                            </div>
                        </div>
                        <p className="plagio">Plagio Control</p>
                        <p className="enter">Enter your email and password below</p>
                        <div className="email">
                            <label>EMAIL</label>
                            <input type="email" placeholder="Email address"></input>
                        </div>
                        <div className="pass">
                            <label>PASSWORD</label>
                            <input type="password" placeholder="Password"></input>
                            <span className="icon vec" onClick={handleToggle}><Icon icon={icon} /></span>
                        </div>
                        
                            <button type="submit" className="button" ><a>Log in</a></button>
                        
                        <div className="acount">
                            <a href="/login" className="as lo">Sign up</a>
                            <span className="no">No tines una cuenta</span>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
        
        
    )
}