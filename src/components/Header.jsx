import React from 'react';
import '../styles/Header.scss'
const Header = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Sobre mi</a>
                </li>
                <li>
                    <a href="">Portafolio</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
            </ul>
        </nav>   
    );
}

export default Header;