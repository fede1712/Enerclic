import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {


    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link className='navbar-brand' to='/'>Enerclic Test</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <Link className='nav-link' to='/demanda'>Demanda</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link className='nav-link' to='/generacion'>Generación</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link className='nav-link' to='/intercambios'>Intercanbios</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link className='nav-link' to='/transporte'>Transporte</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link className='nav-link' to='/mercados'>Mercados</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
