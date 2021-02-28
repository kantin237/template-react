import axios from 'axios'
import {apiGetCall} from './api/requestApi'

export const baseUrl = "http://localhost:7000/books"

export const loadBooks = () => {
    return apiGetCall(baseUrl);
}

const  loadtasks = () => {
    debugger
    apiGetCall(baseUrl);
}

export default loadtasks