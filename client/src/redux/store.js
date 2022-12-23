import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import itemReducer from './reducers/itemReducer'
import authReducer from './reducers/authReducer'
import errorReducer from './reducers/errorReducer'


const initialState = {}
const middlewaare = [thunk]
const store = configureStore({
    reducer:{
        items:itemReducer,
        error: errorReducer,
        auth:authReducer
    }
},initialState,compose(
    applyMiddleware(...middlewaare)
))

export default store