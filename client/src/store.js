import {configureStore, applyMiddleware, composs} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middlewaare = [thunk]
const store = configureStore(rootReducer,initialState,composs(
    applyMiddleware(...middlewaare)
))
export default store