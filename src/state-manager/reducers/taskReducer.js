import React from 'react'
import { DELETE, GET_ALL_TASKS, ADD_TASK, DELETE_TASK,LOAD,LOAD_SUCCESS,LOAD_FAILED } from '../actions/taskTypes'

const INITIAL_STATE = {
    tasks: []
}
export default function taskReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case LOAD_SUCCESS:
            return {
                ...state,
                tasks: state.tasks.concat(action.data)
            }
        
        case ADD_TASK:
        return {
            ...state,
            tasks: action.data
        }

        case DELETE:
            debugger
            return {
                ...state,
                tasks: state.tasks.filter( x => action.data !== x.id)
            }

        default:
            return state
    }
}