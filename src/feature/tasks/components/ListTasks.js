import React, {useEffect,useState} from 'react';
import Task from './Task'
import tasksEndPoint from '../../../tasksEndPoint.json';

import {getTasks }from '../../../state-manager/actions/taskAction'
import {GET_ALL_TASKS} from '../../../state-manager/actions/taskTypes'
import {useDispatch,useSelector} from 'react-redux'

export default function ListTasks() {

    const dispatch = useDispatch();
    let stateTask = useSelector(state => { return state.taskReducer.tasks});
    const loadTasks = () => {

        getTasks()
        .data
        .map(value => dispatch({
            type: GET_ALL_TASKS,
            data: value
        }));
    }
    useEffect(() => {
        loadTasks();
    }, []);
    return (
        <div className="tasks-container ">
            {stateTask.map(task => (
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
