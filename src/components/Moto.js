import React from 'react';

function Moto(props) {
    return (
        <div className="componente">
            <h2>Moto</h2>
            <p>Marca: {props.marca}</p>
            <p>Color: {props.color}</p>
            <p>Modelo: {props.modelo}</p>
        </div>
    );
}

export default Moto;