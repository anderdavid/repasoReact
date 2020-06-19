import React, { Component } from 'react';
import axios from 'axios'

class TestPost extends Component {
    url ='http://localhost:3003/user'
    constructor(props){
        super(props)

        this.state={
            nombre:'Anderson',
            apellido:'Rodriguez',
            cedula:'1085898647',
            edad:'34',
            email:'anderdavid86@hotmail.com',
            password:'Armagedon2020'
        }

        this.save =this.save.bind(this)
        this.InputChange=this.InputChange.bind(this)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.save}>
                    <input type="text" name="nombre" value={this.state.nombre} onChange={this.InputChange} required/><br/>
                    <input type="text" name="apellido" value={this.state.apellido} onChange={this.InputChange} required/><br/>
                    <input type="text" name="cedula" value={this.state.cedula} onChange={this.InputChange} required/><br/>
                    <input type="text" name="edad" value={this.state.edad} onChange={this.InputChange} required/><br/>
                    <input type="email" name="email" value={this.state.email} onChange={this.InputChange} required/><br/>
                    <input type="password" name="password" value={this.state.password} onChange={this.InputChange} required/><br/>
                    <input type="submit" value="guardar"/>
                </form>
               
            <div>{JSON.stringify(this.state)}</div>
            </div>
        );
    }

    save(event){
        event.preventDefault()
        console.log('save')

        axios.post(this.url,{
            'nombre':this.state.nombre,
            'apellido':this.state.apellido,
            'cedula':this.state.cedula,
            'edad':this.state.edad,
            'email':this.state.email,
            'password':this.state.password
        }).then(res=>{
           console.log(JSON.stringify(res.data.msg))
           if(res.data.status){
               alert(res.data.msg)
           }
        })
    }

    InputChange(event){
        var name = event.target.name
        var value =event.target.value

        this.setState({
            [name]:value
        })
    }


}

export default TestPost;