import {ACTIONS} from './types'
import axios from 'axios'

//Check token & load user

export const loadUser = ()=>(dispatch,getState)=>{
    //User loading
    dispatch({type:ACTIONS.USER_LOGING});
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
    axios.get('/api/auth/user',config)
        .then(res=>dispatch({
            type:ACTIONS.USER_LOADED,
            payload:res.data
        }))
        .catch(err=>{
            dispatch({
                type:ACTIONS.AUTH_ERROR
            })
        })
    
}
