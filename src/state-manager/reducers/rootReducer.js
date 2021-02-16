import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import loaderReducer from './loaderReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
    tasks : taskReducer,
    isLoading : loaderReducer,
    error : errorReducer
 })

export default rootReducer