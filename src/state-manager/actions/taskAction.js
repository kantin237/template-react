import axios from 'axios'
import { GET_ALL_TASKS, ADD_TASK, DELETE_TASK,LOAD,LOAD_SUCCESS,LOAD_FAILED  } from './taskTypes'
import tasksEndPoint from '../../tasksEndPoint.json';

export function getTasks(){
    return{
        type: LOAD
    }
}

export function addTask(){
    
}

export function deleteTask(id){
    debugger
    // const tasks = axios.delete('https.../id')
    return{
        type: DELETE_TASK,
        id
    }
}