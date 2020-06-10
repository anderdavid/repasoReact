import React, { Component } from 'react';

class Table extends Component {
    constructor(props){
        super(props)

        this.state ={
            users:[
                {id:1,nombre:'David',apellido:'Rodriguez',edad:'34',email:'anderdavid86@gmail.com',password:'1234'},
                {id:2,nombre:'Anderson',apellido:'Rodriguez',edad:'34',email:'anderdavid86@hotamail.com',password:'qwerty123'}
            ]
        }
        this.editUser =this.editUser.bind(this)
        this.deleteUser=this.deleteUser.bind(this)
    }
    render() {

        const content = this.state.users.map(user=>
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
        return (
            <div>
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
                      {content}
                  </tbody>
              </table>
           </div>
        );
    }

    editUser=()=>{
        alert('editUser()')
    }

    deleteUser=()=>{
        alert('deleteUser()')
    }
}

export default Table;