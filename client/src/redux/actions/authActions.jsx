import {ACTIONS} from './types'
import axios from 'axios'
import { returnErrors } from './errorActions'
//Check token & load user

export const loadUser = ()=>(dispatch,getState)=>{
    //User loading
    dispatch({type:ACTIONS.USER_LOGING});
    
    axios.get('/api/auth/user',tokenConfig(getState))
        .then(res=>dispatch({
            type:ACTIONS.USER_LOADED,
            payload:res.data
        }))
        .catch(err=>{
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type:ACTIONS.AUTH_ERROR
            })
        })
    
}
//Setup config/headers and token
export const tokenConfig = getState=>{
    //Get token from localStoragy
    const token = getState().auth.token
    //Headers
    const config = {
        headers:{
            "Content-type": 'application/json'
        }
    }
    if(token){
        config.headers['x-auth-token'] = token
    }
    return config
}

//Register User
export const register =({ name,email,password})=>dispatch=>{
    //Headers
    const config = {
        headers:{
            'Content-type': 'application/json'
        }
    } 
    //Request body
    const body = JSON.stringify({ name , email, password})
    axios.post('api/users',body , config)
        .then((res)=>dispatch({
            type:ACTIONS.REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err=>{
            dispatch({type:ACTIONS.REGISTER_FAIL})
            dispatch(returnErrors(err.response.data, err.response.status,'REGISTER_FAIL'))
        })
}
//Login User
export const login = ({email,password})=>dispatch=>{
    //Headers
    const config = {
        headers:{
            'Content-type': 'application/json'
        }
    } 
    const body = JSON.stringify({ email, password})
    axios.post('api/auth',body , config)
        .then((res)=>dispatch({
            type:ACTIONS.LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err=>{
            dispatch({type:ACTIONS.LOGIN_FAIL})
            dispatch(returnErrors(err.response.data, err.response.status,'LOGIN_FAIL'))
        })
}

//Logout User
export const logout = ()=>{
    return{
        type: ACTIONS.LOGOUT_SUCCES
    }
}
