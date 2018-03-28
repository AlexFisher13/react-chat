import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './containers/Chat';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Chat/>
    </Provider>, document.getElementById('root'));
