import React from 'react'
import { DELETE, GET_ALL_TASKS, ADD_TASK, DELETE_TASK,LOAD,LOAD_SUCCESS,LOAD_FAILED } from '../actions/taskTypes'

const INITIAL_STATE = {
    tasks: []
}
export default function taskReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case GET_ALL_TASKS:
            debugger
            return {
                tasks: action.data
            }
        
        case ADD_TASK:
        return {
            ...state,
            tasks: action.data
        }

        case DELETE:
            debugger
            return {
                tasks: action.data
            }

        default:
            return state
    }
}