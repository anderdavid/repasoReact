import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            login:'',
            password:''
        }
        this.InputChange = this.InputChange.bind(this)
       
    }
    render() {
        return (
            <div className="componente">
                <h1>Form</h1>
                <form>
                    <input type="text" name="login" placeholder="login" value={this.state.login} onChange={this.InputChange}/>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.InputChange}/>
                    <input type="submit" name="enviar"/>
                </form>
                <div>
                <h3>status:</h3>
                <div>{JSON.stringify(this.state)}</div>
                </div>
            </div>
        );
    }

    InputChange(event){
        console.log('InputChange')
        const value =event.target.value
        const name = event.target.name
        this.setState({
            [name]:value
        })
    }
}

export default LoginForm;