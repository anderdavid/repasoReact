import React from 'react';
import './MenuResponsive.css'


function MenuResponsive(props) {
    return (
        <div>
            <header>
                <div id="marca">
                    <h2 id="subtitulo-logo">NAVBAR RESPONSIVE</h2>
                </div>
                <div className="contenedor-menu">
                    <input id="icon-menu"type="checkbox" name=""/>
                    <span id="span-icon-menu"></span>
                    <span id="span-icon-menu"></span>
                    <span id="span-icon-menu"></span>

                    <ul className="menu">
                        <li>
                            <a href="#" className="level1 actual">
                                <i className="icono izquierda fa fa-home"></i>
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#" className="level1 actual">
                                <i className="icono izquierda fas fa-football-ball"></i>
                                    Quienes Somos
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" className="level1 actual">
                                <i className="icono izquierda fa fa-plane"></i>
                                    Servicios
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" classNameName="level1 actual">
                                <i className="icono izquierda fa fa-envelope"></i>
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default MenuResponsive;