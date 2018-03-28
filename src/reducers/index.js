import {combineReducers} from 'redux'

const initialStore = ['fisher', 'july', 'johny'];

export default function rootReducer(store=initialStore, action) {
    if (action.type === 'ADD_USER') {
        return [...store, action.payload]
    }
    return store;
}