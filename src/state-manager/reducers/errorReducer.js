import React from 'react'
import { GET_ALL_TASKS, ADD_TASK, DELETE_TASK,LOAD,LOAD_SUCCESS,LOAD_FAILED } from '../actions/taskTypes'



export default function loaderReducer(state = null, action){
    switch(action.type){
        case LOAD:
            
        
        case LOAD_SUCCESS:
            return null;

        case LOAD_FAILED:
            return action.error;

        default:
            return state
    }
}