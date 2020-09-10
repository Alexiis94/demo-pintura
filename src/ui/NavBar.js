import React from 'react';
import { Link, NavLink  } from "react-router-dom";
import './NavBar.css'

export const NavBar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <div className="container">
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                     <Link className="navbar-brand" to="/">Inicio</Link>
                    <NavLink 
                        activeClassName="active"
                        className="nav-link" 
                        to="/about"
                        >
                            About
                        </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-link" 
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                    </div>
                    <div>
                    <NavLink activeClassName="active" className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Servicios
                        </NavLink>
                    <li className="nav-item dropdown" >
                        <div className="dropdown-menu mt-2" aria-labelledby="navbarDropdownMenuLink">
                        <NavLink className="dropdown-item" id="dropdownID" to="/remodelacion">Servicios de Remodelación</NavLink>
                        <NavLink className="dropdown-item" id="dropdownID" to="/mantencion">   Servicios de Mantención</NavLink>
                        </div>
                    </li>

                    </div>
                </div>
            </div>
        </nav>
    )
}
