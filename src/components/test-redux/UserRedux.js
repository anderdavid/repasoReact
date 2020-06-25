import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchUsers} from '../../redux'


class UserRedux extends Component {
    constructor(props) {
        super(props);
        
    }

    componentWillMount=()=>{
        this.props.fetchUsers()
    }
    
    render() {
        var loading = this.props.data.loading
        var error= this.props.data.error

        if(loading){
            this.statusConnection =<div>Loading...</div>
        }else if(error !=''){
            this.statusConnection=<div></div>
            this.content=<div>{error}</div>
        }else{
            this.statusConnection=<div></div>

            var status =this.props.data.data.status
            if(!status){
                this.content=<tr><td>No hay usuarios</td></tr>
            }else{
                this.content=this.props.data.data.users.map(user=>
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
            }
        }
        return (
            <div className="container">
                {this.statusConnection}
                <p>{JSON.stringify(this.props.data)}</p>
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
            </div>
        );
    }
}

const mapStateToProps =state=>{
    return{
        data:state.user
    }
}

const  mapDispatchToProps =dispatch =>{
    return{
        fetchUsers:() =>dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(UserRedux)