 import{
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
 } from './userTypes'

import axios from 'axios'
 
 

export const fetchUserRequest =()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

const fetchUserSuccess =data=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload: data
    }
}

const fetchUserFailure =error=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        axios.get('http://localhost:3003/user').then(
            response=>{
                const data = response.data
                dispatch(fetchUserSuccess(data))
            }
        ).catch(
            error=>{
                const errorMsg =error.message
                dispatch(fetchUserFailure(errorMsg))
            }
        )
    }
}