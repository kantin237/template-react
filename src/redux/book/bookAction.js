import React from 'react'
import {LOAD_BOOK, GET_ALL_BOOK, GET_BOOK_BY_ID} from './bookType'

export function loadBooks(){
    return {
        type:LOAD_BOOK
    }
}

export function getBooks(){
    return {
        type:GET_ALL_BOOK
    }
}

export function getBook(){
    return {
        type:GET_BOOK_BY_ID
    }
}