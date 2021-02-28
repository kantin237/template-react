import { combineReducers } from 'redux'
import taskReducer from './task/taskReducer'
import bookReducer from './book/bookReducer'

const rootReducer = combineReducers({
    taskReducer,
    bookReducer
 })

export default rootReducer