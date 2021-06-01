import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { emailAndPasswordLogin, googleLogin } from '../actions/auth';
const LoginPage = () => {
    const [data, setData] = useState({
        email: "",
        password: "",

    });
    const { email, password } = data;
    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value,
        })
    };
    const dispatch = useDispatch();
    const handleGoogleLogin = () => {
        dispatch(googleLogin())
    }

    const handleEmailLogin = (e) => {
        e.preventDefault();
        if (email.trim() === "" || !email.trim().includes("@")) {
            return;
        }
        if (password.trim().length < 6) {
            return;
        }
        dispatch(emailAndPasswordLogin(email, password))

    }
    return (
        <div className="container" >
            <h3>Iniciar Sesión</h3>
            <hr />
            <div className="row container">
                <form className="col s12" onSubmit={handleEmailLogin} >
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input onChange={handleChange} value={email} name="email" id="icon_prefix1" className="materialize-textarea" type="email" />
                            <label htmlFor="icon_prefix1"> Correo Electrónico</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">vpn_key</i>
                            <input onChange={handleChange} value={password} name="password" id="icon_prefix2" className="materialize-textarea" type="password" />
                            <label htmlFor="icon_prefix2"> Contraseña</label>
                        </div>

                    </div>
                    <button type="submit" className="waves-effect waves-light btn">Ingresar</button>
                    <hr />
                    <GoogleButton
                        onClick={handleGoogleLogin}
                    />
                    <Link to="/auth/register"> ¿Todavia no tienes Cuenta Registrate?</Link>
                </form>

            </div>
        </div >
    )
}

export default LoginPage
