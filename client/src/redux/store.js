import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {itemReducer} from './reducers/itemReducer'

const initialState = {}
const middlewaare = [thunk]
const store = configureStore({
    reducer:{
        items:itemReducer
    }
},initialState,compose(
    applyMiddleware(...middlewaare)
))

export default store