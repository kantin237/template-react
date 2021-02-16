import { takeEvery, call, put } from 'redux-saga/effects';
import {LOAD,LOAD_SUCCESS,LOAD_FAILED,DELETE_TASK,DELETE} from '../actions/taskTypes'
import {getTask} from '../api/apiGet'

function* workerSaga() {
    try {
        const data = yield call(getTask);
        yield put({ type: LOAD_SUCCESS, data });
    } catch (e){
        yield put({ type: LOAD_FAILED, data : e });
    }
}

function* workerSagaDelete(idT) {
    debugger
    console.log(idT.id);
    try {
        const data = yield call(deleteTask(idT.id));
        yield put({ type: DELETE, data });
        console.log('data');
    } catch (e){
        yield put({ type: LOAD_FAILED, data : e });
    }
}



export function deleteTask(id){
    debugger
    return{
        data : id
    }
}

function* rootSaga() {
    yield takeEvery(LOAD, workerSaga);
    yield takeEvery(DELETE_TASK, workerSagaDelete);
}


export default rootSaga;