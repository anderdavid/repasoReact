import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)

        this.state={
            id:1,
            nombre:'David',
            apellido:'Rodriguez',
            edad:'34',
            email:'anderdavid86@gmail.com',
            password:'1234'
        }

        this.valueChange =this.valueChange.bind(this)
        this.send = this.send.bind(this)
    }
    render() {
        return (
            <div>
                <br/>
                <br/>
                <form onSubmit={this.send}>
                    <input type="text" name="nombre" placeholder="nombre" value={this.state.nombre} onChange={this.valueChange}/><br/>
                    <input type="text" name="apellido" placeholder="apellido" value={this.state.apellido} onChange={this.valueChange}/><br/>
                    <input type="text" name="edad" placeholder="edad" value={this.state.edad} onChange={this.valueChange}/><br/>
                    <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.valueChange}/><br/>
                    <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.valueChange}/><br/>
                    <input type='submit' value='Guardar'/>
                </form>
                <br/>
                <br/>
                <div>
                    {JSON.stringify(this.state)}
                </div>
            </div>
        );
    }

    valueChange =(event)=>{
        var name = event.target.name
        var value=event.target.value

        this.setState({
            [name]:value
        })
    }

    send =(event)=>{
        event.preventDefault()
        alert('guardar Usuario')
    }
}

export default Form;