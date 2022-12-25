import axios from 'axios'
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'
import {ACTIONS} from './types'


export const getItems =()=>dispatch=>{
    dispatch(setItemsLoading())
    axios.get('/api/items')
        .then(res=>dispatch({
            type:ACTIONS.GET_ITEMS,
            payload : res.data
        }))
        .catch(err=>dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addItem = (product)=>(dispatch, getState)=>{
    axios
        .post('/api/items',product, tokenConfig(getState))
        .then(res=>
                dispatch({
                    type:ACTIONS.ADD_ITEM,
                    payload: res.data
                })
            )
}
export const deleteItem = (id)=>(dispatch, getState)=>{
    axios
        .delete(`/api/items/${id}`,tokenConfig(getState))
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