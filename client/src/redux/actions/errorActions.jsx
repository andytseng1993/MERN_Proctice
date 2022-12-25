import {ACTIONS} from './types'

//Return errors

export const returnErrors = (msg, status, id = null)=>{
    return {
        type: ACTIONS.GET_ERRORS,
        payload:{msg,status,id}
    }
}

//Clear Errors
export const clearErrors = ()=>{
    return {
        type:ACTIONS.CLEAR_ERRORS
    }
}