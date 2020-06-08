import React from 'react';

function Car(props) {
    return (
        <div className="componente">
            <h1>Carro</h1>
            <p>marca {props.brand}</p>
            <p>color: {props.color}</p>
        </div>
    
    );
}

export default Car;