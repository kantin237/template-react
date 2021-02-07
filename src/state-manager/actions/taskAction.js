import axios from 'axios'
import { GET_ALL_TASKS, ADD_TASK, DELETE_TASK } from './taskTypes'
import tasksEndPoint from '../../tasksEndPoint.json';

export function getTasks(){
    // const tasks = axios.get('https...')
    // .then(response => response.data)
    const tasks = tasksEndPoint;
    return{
        type: GET_ALL_TASKS,
        data: tasks
    }
}

export function addTask(){
    
}

export function deleteTask(id){
    // const tasks = axios.delete('https.../id')
    return{
        type: DELETE_TASK,
        data: id
    }
}