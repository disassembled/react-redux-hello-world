import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './stylesheets/main.scss';
import App from './components/App';
import { reducers } from './reducers/index';

// build users list
let users = [];
let usernames = ['John', 'Paul', 'Ringo', 'George', 'Wilma', 'Betty', 'Arthur'];
for(let i=0; i<7; i++) {
    users.push({
        id: i,
        username: usernames[i],
        job: 'Employee ' + (i+1),
    });
}

const initialState = {
    users: {
        list: users,
        usernameSort: -1,
    }
}

// create the store
const store = createStore(reducers, initialState);

// render the main component
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);