import { combineReducers } from 'redux'
import taskReducer from './task/taskReducer'

const rootReducer = combineReducers({
    taskReducer
 })

export default rootReducer