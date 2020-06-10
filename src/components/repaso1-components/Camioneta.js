import React, { Component } from 'react';

class Camioneta extends Component {
    render() {
        return (
            <div className="componente">
                <h1>Camioneta</h1>
                <p>Marca: {this.props.brand}</p>
                <p>Color: {this.props.color}</p>
            </div>
        );
    }
}

export default Camioneta;