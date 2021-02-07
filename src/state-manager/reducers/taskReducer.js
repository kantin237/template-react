import React from 'react'
import { GET_ALL_TASKS, ADD_TASK, DELETE_TASK } from '../actions/taskTypes'

const INITIAL_STATE = {
    tasks: []
}
export default function taskReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case GET_ALL_TASKS:
            return {
                ...state,
                tasks: state.tasks.concat(action.data)
            }
        
        case ADD_TASK:
        return {
            ...state,
            tasks: action.data
        }

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter( x => action.data !== x.id)
            }

        default:
            return state
    }
}