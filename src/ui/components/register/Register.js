import React, {useState} from "react";
import './Register.css';
import Title from './subcomponents/Title/Title';
import Label from './subcomponents/Label/Label';
import Input from "./subcomponents/Input/Input";
import {emailValidation} from './utils/FieldValidation.js';
import {passwordValidation} from './utils/FieldValidation.js';
import {repasswordValidation} from './utils/FieldValidation.js';

export const Register = () => {

    const[user, setUser] = useState('');
    const[password, setPassword] = useState('');
    const[repassword, setRepassword] = useState('');
    const[userError, setUserdError] = useState(false);
    const[passwordError, setPasswordError] = useState(false);
    const[repasswordError, setRepasswordError] = useState(false);
    const[isRegister, setIsRegister] = useState(false)
    const[hasError, setHasError] = useState(false);

    function handleChange(name, value) {
        if (name === 'correo') {
            const [state, valueField] = emailValidation(value);
            setUserdError(state);
            setUser(valueField);
        } 
        if ( name === 'contraseña' ) {
            const [state, valueField] = passwordValidation(value);
            setPasswordError(state);
            setPassword(valueField);
        } 
        if ( name === 'repetircontraseña' ) {
            const [state, valueField] = repasswordValidation(value,password);
            setRepasswordError(state);
            setRepassword(valueField);
        }
    }

    function ifMatch(param) {
        if (param.user.length > 0 && param.password.length > 0 && param.repassword.length > 0) {
            const {user,password} = param;
            const accountData={user, password};
            const account = JSON.stringify(accountData);
            localStorage.setItem('account', account);
            setIsRegister(true);
        } else {
            setIsRegister(false);
            setHasError(true);
        }
    }

    function handleSubmit() {
        
        const account = {user,password,repassword};
        if(account) {
            ifMatch(account);
        }
    }

    return (
        <div className="prueba">
        <div className="register-container">
            { isRegister ?
                <>
                    <form className="form-register">
                        <br></br><br></br><br></br><br></br>
                        <img className="logo" src="https://previews.123rf.com/images/koblizeek/koblizeek2001/koblizeek200100050/138262629-usuario-miembro-de-perfil-de-icono-de-hombre-vector-de-s%C3%ADmbolo-perconal-sobre-fondo-blanco-aislado-.jpg"/>
                        <p className="title-one">Plagio Control</p>
                        <Title text='Register Plagio Control' />
                        <p className="title-two">FELICIDADES SU CUENTA YA ESTA REGISTRADA!!!</p>
                        <img className="logo2" src="https://www.descargarstickers.com/publico/static/miniatura/2020/08/746800.gif"/>
                        <p className="title-three"><a href=""> Login </a></p>
                    </form>
                </>
            :
            <div className="register-content"> 
                <div id="id-form-register" className="form-register" onSubmit="return">
                    <img className="logo" src="https://previews.123rf.com/images/koblizeek/koblizeek2001/koblizeek200100050/138262629-usuario-miembro-de-perfil-de-icono-de-hombre-vector-de-s%C3%ADmbolo-perconal-sobre-fondo-blanco-aislado-.jpg"/>
                    <p className="title-one">Plagio Control</p>
                    <Title text='Register Plagio Control' />
                    <p className="title-two">Enter your email and password below</p>
                    {hasError &&
                        <label className="label-input-error"> 
                            Uno o mas campos no cumplen con los requisitos <br></br>
                            Por favor ingreselos correctamente <br></br>
                        </label>
                        
                    }   
                    <Label text='Email' />
                    <Input 
                        attribute={{
                            id:'correo',
                            name:'correo',
                            type:'email',
                            placeholder:'Email address'
                        }}
                        handleChange={handleChange}
                        param={userError}
                    />
                    {userError &&
                        <Label 
                            text='Se debe ingresar una direccion de correo valida'
                            param={userError}
                        />
                    }
                    <Label text='Password' />
                    <Input 
                        attribute={{
                            id:'contraseña',
                            name:'contraseña',
                            type:'password',
                            placeholder:'Password'
                        }}
                        handleChange={handleChange}
                        param={passwordError}
                    />
                    {passwordError &&
                        <Label 
                            text='La contraseña debe tener 6 o mas caracteres'
                            param={passwordError}
                        />
                    }
                    <Label text='Re. Password' />
                    <Input 
                        attribute={{
                            id:'repetircontraseña',
                            name:'repetircontraseña',
                            type:'password',
                            placeholder:'Repeat password'
                        }}
                        handleChange={handleChange}
                        param={repasswordError}
                    />
                    {repasswordError &&
                        <Label 
                            text='Este campo debe coincidir con la contraseña'
                            param={repasswordError}
                        />
                    }
                    <button className='sumbit-register' onClick={handleSubmit}>
                        Sing In
                    </button>
                    <p className="title-three">¿Ya tienes una cuenta? <a href=""> Login </a></p>
                </div> 
            </div>
            }
        </div>
        </div>
    )
}