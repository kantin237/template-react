import React from 'react'
import {LOAD_BOOK, GET_ALL_BOOK, GET_BOOK_BY_ID} from './bookType'

const INITIAL_STATE = {
    books: []
}

export default function bookReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case GET_ALL_BOOK:
            return {
                books : action.data
            }
        case GET_BOOK_BY_ID:
            return {
                books : action.data
            }
        default :
            return {
                state
            }
    }
}
