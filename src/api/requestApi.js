import axios from "axios";
import tasksEndPoint from '../tasksEndPoint.json';

export function apiGetCall(url, headers){
    return axios.get(url)
        .then(response => {
            console.log(response.data);
            console.log(tasksEndPoint);
            return tasksEndPoint ;
        })
        .catch(error => console.log(error));

}

export function apiPostCall(url, object){
    return axios.post(url, object)
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error));

}

export function apiUpdateCall(url, object){
    return axios.update(url,object)
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error));

}

export function apiDeleteCall(url, id){
    return axios.delete(url/id)
        .then(response => {
            console.log("delete");
        })
        .catch(error => console.log(error));

}