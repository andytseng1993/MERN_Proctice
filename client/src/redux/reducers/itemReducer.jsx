import { v4 as uuidv4 } from 'uuid'
import {ACTIONS} from '../actions/types'

const initialState ={
    items: [
        {id:uuidv4(),name:'Eggs'},
        {id:uuidv4(),name:'Milk'},
        {id:uuidv4(),name:'Steak'},
        {id:uuidv4(),name:'Water'}
]}

export const itemReducer= (state = initialState,action)=>{
    switch(action.type){
        case ACTIONS.GET_ITEMS:
            return {...state}
        case ACTIONS.ADD_ITEM:
            return{...state,...action.payload}
        default:
            return state
            
    }
}
