import React, { Component } from 'react';
import './styleExample.css'
import 'foundation-sites/dist/css/foundation.min.css'
import * as $ from 'jquery';
import 'foundation-sites';

class StyledComponent extends Component {
    componentWillMount(){
        $( document ).ready(function() {
            console.log( "jquery ready" );
        });
        
    }
    componentDidMount(){
        $(document).foundation()
    }
    render() {
        return (
            <div>
                <div classNameName="main">
                    <h1>StyleComponent</h1>
                </div>
                <nav>
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li><a  href="#" className="icon-button home step fi-home size-72"></a></li>
                        <li>
                            <a href="#">Usuarios</a>
                            <ul className="menu">
                                <li><a  hr>Ver</a></li>
                                <li><a>Crear</a></li>
                            </ul>
                        </li>
                    </ul> 
                </nav>
                <div className="top-bar">
                   <div className="top-bar-left">
                        <ul className="menu">
                            <li><a href="#">One</a></li>
                            <li><a href="#">Two</a></li>
                            <li><a href="#">Three</a></li>
                            <li><a href="#">Four</a></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li><input type="search" placeholder="Search"/></li>
                        <li><button type="button" className="button">Search</button></li>
                        </ul>
                    </div>
                </div>

            </div> 
            
        );
       
    }
}

export default StyledComponent;