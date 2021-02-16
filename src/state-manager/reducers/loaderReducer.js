import React from 'react'
import { GET_ALL_TASKS, ADD_TASK, DELETE_TASK,LOAD,LOAD_SUCCESS,LOAD_FAILED } from '../actions/taskTypes'



export default function loaderReducer(state = false, action){
    switch(action.type){
        case LOAD:
            return true;
        
        case LOAD_SUCCESS:
            return false;

        case LOAD_FAILED:
            return false;

        default:
            return state
    }
}