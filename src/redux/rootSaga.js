import { takeEvery, call, put, fork, takeLatest } from 'redux-saga/effects';
import {LOAD,GET_ALL_TASKS,LOAD_SUCCESS,LOAD_FAILED,DELETE_TASK,DELETE} from './task/taskType'
import loadTask from './task/taskSaga'


function* rootSaga() {
    debugger
    yield [
        fork(loadTask),
        takeLatest(GET_ALL_TASKS, loadTask)
    ]
    

}


export default rootSaga;