import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth';

const NavBar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <nav className="green">
            <div className="nav-wrapper">
                <span className="brand-logo">Calculadora </span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <button onClick={handleLogout} className=" btn red waves-effect waves-light">
                            Cerrar Sesión
                        </button>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default NavBar
