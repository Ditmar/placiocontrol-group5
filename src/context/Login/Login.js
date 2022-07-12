import React, {useState} from 'react';
import './login.scss';
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import useForm from '../../hooks/useForm';
import { PropTypes } from 'prop-types';
import "@fontsource/mulish";
import Cookies from "universal-cookie";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/index';
import axios from "axios";
import Swal from "sweetalert2";


const api = "http://localhost:8000/server/autenthication/login";
const cookies = new Cookies();
export const  Login=({label}) => {
        // const datosForm={
        //     email: '',
        //     password: '',
        // }
        // const [form, setForm]=useState(datosForm);
        // const handleChange = (e) => {
        //   setForm({
        //     ...form,
        //     [e.target.name]: e.target.value,
        //   });
        // };
        
        // const handleSubmit=(e)=>{
        //   fetch(`${api}/post`,{
        //     method: 'POST',
        //     body: JSON.stringify(form),
        //     headers:{
        //       'content-type': 'application/json',
        //     }
        //   }).then(res=>res.json())
        //   }

    const dispatch = useDispatch();
    const [state, setState] = useState({
      form: {
        email: '',
        password: '',
      },
    });
    const [user, setUser] = useState(false);
    const [errorUser, setErrorUser] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const handleChange = async (e) => {
      await setState({
        form: {
          ...state.form,
          [e.target.name]: e.target.value,
        },
      });
    };
const iniciarSesion = async (e) => {
    e.preventDefault();
    await axios
      .post(
        user === true?
        api : sinUsuario(),
        {
          email: state.form.email,
          password: state.form.password,
        }
      )
      .then((response) => {
        if (response.data.message === "SUCCESS") {
          dispatch(authActions.setLogin());
          var respuesta = response.data.user;
          cookies.set("_id", respuesta.id, { path: "/" });
          cookies.set("Nombre", respuesta.name, { path: "/" });
          cookies.set("Ap_Paterno", respuesta.last_name, { path: "/" });
          cookies.set("image", respuesta.image, { path: "/" });
          Swal.fire({
            title: "Success",
            text: `${respuesta.name} ${respuesta.last_name} ${respuesta.image}`,
            confirmButtonText: "OK",
            allowOutsideClick: false,
          });
        } else if (response.data.message === "user not found"){
          setErrorUser(response.data.message);
          setErrorPassword("");
        } else if (response.data.message === "Incorrect password") {
          setErrorPassword(response.data.message);
          setErrorUser("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const sinUsuario = () => {
    Swal.fire({
      title: 'Oops',
      text: 'Please put correct data',
    })
  }
    const [password, setPassword] = React.useState('');
    const [shown, setShown] = React.useState(false);
    const switchShown = () => setShown(!shown);
    const onChange = ({ currentTarget }) => setPassword(currentTarget.value);    
    // const [ handlerChangeForm] = useForm({email:"" , password: ""});
    // const onSubmit = (event) => {
    //     event.preventDefault();
    // }
    return(
        <div className="container" >
            <form className="container-login" >
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
                            <input type="email" placeholder="Email address" onChange={handleChange}></input>
                            {errorUser.length!==0? <div><strong>{errorUser}</strong></div> : <br/>}
                        </div>
                        <div className="box-password">
                            <label>PASSWORD</label>
                            <input type={shown ? 'text' : 'password'} placeholder="Password" value={password} onChange={onChange}></input>
                            <span className="icon vector" onClick={switchShown}><Icon icon={eyeOff} /></span>
                            {errorPassword.length!==0? <div><strong>{errorPassword}</strong></div> : <br/>}
                        </div>
                            <button type="submit" className="button" onClick={iniciarSesion}><a>Log in</a></button>  
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