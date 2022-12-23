import {ACTIONS} from '../actions/types'

const initialState ={
    items: [],
    loading: false
}

export default itemReducer= (state = initialState,action)=>{
    switch(action.type){
        case ACTIONS.GET_ITEMS:
            return {
                ...state,
                items:action.payload,
                loading: false
            }
        case ACTIONS.ADD_ITEM:
            return{
                ...state,
                items:[...state.items,action.payload]
            }
        case ACTIONS.DELETE_ITEM:
            return {
                ...state,
                items:state.items.filter(item=>item._id!==action.payload)
            }
        case ACTIONS.LOADING_ITEM:
            return {
                ...state,
                loading: true
            }
        default:
            return state
            
    }
}
