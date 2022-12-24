import {ACTIONS} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated:null,
    isLoading:false,
    user:null
}
export const authReducer=(state =initialState,action)=>{
    switch(action.type){
        case ACTIONS.USER_LOGING:
            return{
                ...state,
                isLoading:true
            }
        case ACTIONS.USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                isLoading: false,
                user:action.payload
            }
        case ACTIONS.LOGIN_SUCCESS:
        case ACTIONS.REGISTER_SUCCESS:
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading: false,
            }
        case ACTIONS.AUTH_ERROR:
        case ACTIONS.LOGOUT_SUCCES:
        case ACTIONS.LOGIN_FAIL:
        case ACTIONS.REGISTER_FAIL:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                user:null,
                isAuthenticated:false,
                isLoading:false
            }
        default:
            return state
    }
}