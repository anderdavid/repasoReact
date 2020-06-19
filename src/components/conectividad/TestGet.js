import React, { Component } from 'react';
import axios from 'axios'

class TestGet extends Component {

    url ='http://localhost:3003/user'
    
    constructor(props){
        super(props)
        this.state ={
            status:false,
            users:[]
        }
    }
    componentDidMount(){
        console.log('componente montado')
        axios.get(this.url).then(res=>{
            console.log(JSON.stringify(res.data))
            this.setState({
                status:res.data.status,
                users:res.data.users
            })
        })

    }
    render() {
        if(this.state.status){
            this.content =this.state.users.map(user=>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nombre}</td>
                    <td>{user.apellido}</td>
                    <td>{user.edad}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                        <button onClick={()=>{alert('view')}}>View</button>
                        <button onClick={this.editUser}>Edit</button>
                        <button onClick={this.deleteUser}>Delete</button>
                    </td>
                </tr>
            )
        }else{
            this.content=<tr><td>No Data</td></tr>
        }
       
        return (
            <div className="container">
              <table border='1'>
                  <thead>
                      <tr>
                          <td>id</td>
                          <td>nombre</td>
                          <td>apellido</td>
                          <td>edad</td>
                          <td>email</td>
                          <td>password</td>
                          <td>Actions</td>
                      </tr>
                  </thead>
                  <tbody>
                      {this.content}
                  </tbody>
              </table>
            </div>
        );
    }
}

export default TestGet;