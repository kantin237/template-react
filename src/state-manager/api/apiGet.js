import tasksEndPoint from '../../tasksEndPoint.json'

export function getTask(){
    // const tasks = axios.get('https...')
    // .then(response => response.data)
    
    const tasks = tasksEndPoint;
    return{
        data: tasks
    }
}