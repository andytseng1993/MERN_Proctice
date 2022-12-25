import {ACTIONS} from '../actions/types'

const initialState ={
    msg:{},
    status:null,
    id: null
}

export const errorReducer=(state=initialState,action)=>{
    switch(action.type){
        case ACTIONS.GET_ERRORS:
            return{
                msg:action.payload.msg,
                status:action.payload.status,
                id:action.payload.id
            }
        case ACTIONS.CLEAR_ERRORS:
            return {
                msg:{},
                status:null,
            }
        default:
            return state
    }
}