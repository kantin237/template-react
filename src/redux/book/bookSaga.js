import { call, put } from 'redux-saga/effects';
import {baseUrl, loadBooks} from '../apiCalls';
import {GET_ALL_BOOK} from './bookType'
import {apiGetCall} from '../api/requestApi'


export default function* loadBook(){
    const baseUrl = "http://localhost:7000/books"

    const books = yield call(apiGetCall,baseUrl);

    yield put({type: GET_ALL_BOOK, data:books});
}