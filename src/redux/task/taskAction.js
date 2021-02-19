import axios from 'axios'
import { GET_ALL_TASKS, ADD_TASK, DELETE_TASK,LOAD,LOAD_SUCCESS,LOAD_FAILED  } from './taskType'

export function getTasks(){
    return{
        type: GET_ALL_TASKS
    }
}

export function addTask(){
    
}

export function deleteTask(id){

    return{
        type: DELETE_TASK,
        id
    }
}