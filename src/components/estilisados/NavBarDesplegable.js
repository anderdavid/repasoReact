import React, { Component } from 'react';
import './NavBarDesplegable.css'

class NavBarDesplegable extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="menu">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Usuarios</a>
                            <ul>
                                <li><a href="#">Ver</a></li>
                                <li><a href="#">Crear</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Localizacion</a>
                            <ul>
                                <li><a href="#">Ver</a></li>
                                <li><a href="#">Ver en Mapa</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBarDesplegable;