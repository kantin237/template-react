import { takeEvery, call, put, fork, takeLatest } from 'redux-saga/effects';
import {LOAD,GET_ALL_TASKS,LOAD_SUCCESS,LOAD_FAILED,DELETE_TASK,DELETE} from './task/taskType'
import {LOAD_BOOK} from './book/bookType'
import loadTask from './task/taskSaga'
import loadBook from './book/bookSaga'


function* rootSaga() {
    yield takeLatest(LOAD_BOOK, loadBook);
}


export default rootSaga;