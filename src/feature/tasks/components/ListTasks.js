import React, {useEffect,useState} from 'react';
import Task from './Task'
import tasksEndPoint from '../../../tasksEndPoint.json';

import {getTasks }from '../../../state-manager/actions/taskAction'
import {GET_ALL_TASKS, LOAD} from '../../../state-manager/actions/taskTypes'
import {useDispatch,useSelector} from 'react-redux'

export default function ListTasks() {

    const dispatch = useDispatch();
    let stateTask = useSelector(state => { return state.tasks});
    console.log(stateTask)
    const loadTasks = () => {
        dispatch(getTasks());
    }

    useEffect(() => {
        loadTasks();
    }, []);
    
    return (
        <div className="tasks-container ">
            {stateTask.tasks.map(task => (
                <div>
                    <Task
                        key = {task.id}
                        id = {task.id}
                        hour = {task.heure}
                        minutes = {task.min}
                        name = {task.nom}
                        location = {task.lieu}
                        />
                </div>
            ))}
        </div>
    )
}
