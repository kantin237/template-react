import { call, put } from 'redux-saga/effects';
import loadTasks from '../apiCalls';
import {GET_ALL_TASKS} from './taskType'

export default function* loadTask(){
    debugger
    const tasks = yield call(loadTasks);

    yield put({type: GET_ALL_TASKS, tasks});
}