import React from 'react';

function HelloBulma(props) {
    return (
    <section className="section">
        <div className="container">
            <h1 className="title">
                Hello World
            </h1>
            <p className="subtitle">
                My first website with <strong>Bulma</strong>!
            </p>
            <div className="buttons">
                <button className="button is-info">Info</button>
                <button className="button is-success">Success</button>
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </section>
    );
}

export default HelloBulma;