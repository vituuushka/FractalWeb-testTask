import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import formReducer from './form-reducer'

const reducers = combineReducers({
    formReducer
})
const store = createStore(reducers, applyMiddleware(thunk))
export default store