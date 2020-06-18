import React, { Component } from 'react';
import './NavBarSimple.css'

class NavBarSimple extends Component {
    constructor(props) {
        super(props);
        this.state =['Inicio','Nosotros','Servicios','Contacto']
        
    }
    
    render() {
        let content= this.state.map( item=>
            <li><a href="#">{item}</a></li>
        )
        return (
            <div>
                <nav>
                    <ul>
                        {content}
                    </ul>
                </nav> 
            </div>
        );
    }
}

export default NavBarSimple;