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
                    {task.data.map(x => 
                        <Task
                        key = {x.id}
                        id = {x.id}
                        hour = {x.heure}
                        minutes = {x.min}
                        name = {x.nom}
                        location = {x.lieu}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}
