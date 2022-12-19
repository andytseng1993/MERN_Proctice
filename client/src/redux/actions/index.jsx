import axios from 'axios'
import {ACTIONS} from './types'

export const getItems =()=>dispatch=>{
    dispatch(setItemsLoading())
    axios.get('/api/items')
        .then(res=>dispatch({
            type:ACTIONS.GET_ITEMS,
            payload : res.data
        }))
}

export const addItem = (product)=>dispatch=>{
    axios
        .post('/api/items',product)
        .then(res=>
                dispatch({
                    type:ACTIONS.ADD_ITEM,
                    payload: res.data
                })
            )
}
export const deleteItem = (id)=>dispatch=>{
    axios
        .delete(`/api/items/${id}`)
        .then(res=>
            dispatch({
                type:ACTIONS.DELETE_ITEM,
                payload: id
            })
        )
}
export const setItemsLoading =()=>{
    return{
        type: ACTIONS.LOADING_ITEM
    }
}