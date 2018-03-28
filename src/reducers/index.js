import {combineReducers} from 'redux'

const users = ['fisher', 'july', 'johny'];
function userReducer(store=users, action) {
    if (action.type === 'ADD_USER') {
        return [...store, action.payload]
    }
    return store;
}

const messages = [
    {
        text: 'Hello man',
        datetime: '09/08/2018',
        author: 'July'
    },
    {
        text: 'Hey baby',
        datetime: '09/08/2018',
        author: 'Fisher'
    }];
function messageReducer(store=messages, actions) {
    return store;
}

export default combineReducers({
    userReducer,
    messageReducer
})