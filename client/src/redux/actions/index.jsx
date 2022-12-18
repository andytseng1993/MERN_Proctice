import {ACTIONS} from './types'

export const getItems =()=>{
    return {
        type:ACTIONS.GET_ITEMS
    }
}

export const addItem = (product)=>{
    return{
        type:ACTIONS.ADD_ITEM,
        payload: product
    }
}