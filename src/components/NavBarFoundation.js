import React from 'react';
import './styleExample.css'

function NavBarFoundation(props) {
    return (
        <div>
           {/*  <ul classNameName="dropdown vertical medium-horizontal menu" data-responsive-menu="drilldown medium-dropdown" data-auto-height="true" data-animate-height="true" >
                <li>
                    <a href="#">Usuarios</a>
                    <ul classNameName="menu"> 
                        <li><a href="#">Nuevo Usuario</a></li>
                        <li><a href="#">Ver Usuarios</a></li>
                    </ul>
                </li>
                <li><a href="#">Localizacion</a>
                    <ul classNameName="menu"> 
                        <li><a href="#">Reporte Gps</a></li>
                        <li><a href="#">Geocercas</a></li>
                    </ul>
                </li>
                <li><a href="#">Vehiculos</a></li>
            </ul> */}
            <nav className="top-bar topbar-responsive">
                <div className="top-bar-title">
                    <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
                    <button className="menu-icon" type="button" data-toggle="true"></button>
                    </span>
                    <a className="topbar-responsive-logo" href="#"><strong>Site Title</strong></a>
                </div>
                <div id="topbar-responsive" className="topbar-responsive-links">
                    <div className="top-bar-right">
                    <ul className="menu simple vertical medium-horizontal">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Works</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                        <li>
                        <button type="button" className="button hollow topbar-responsive-button">Categories</button>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBarFoundation;