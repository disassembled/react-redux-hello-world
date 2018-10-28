import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './stylesheets/main.scss';
import App from './components/App';
import { reducers } from './reducers/index';

let users = [
    { id: 1, show: true, username: 'John',   job: 'Cleaner',           access: ['Cupboard']},
    { id: 2, show: true, username: 'Paul',   job: 'HR',                access: ['HR']},
    { id: 3, show: true, username: 'George', job: 'Boss',              access: ['Everything']},
    { id: 4, show: true, username: 'Ringo',  job: 'Secretary',         access: ['Everything']},
    { id: 5, show: true, username: 'Wilma',  job: 'Sales',             access: ['Sales', 'HR', 'Factory']},
    { id: 6, show: true, username: 'Betty',  job: 'Hostile Takeovers', access: ['War room']},
    { id: 7, show: true, username: 'Arthur', job: 'Hitchhiker',        access: ['Vogon ship', 'Local pub']},
];

let access = users.map(user => user.access).reduce((a, b) => [...a, ...b]);
let areas = [...new Set(access)].map(area => { return { name: area, checked: true }});

console.log('Creating initial state:')
const initialState = {
    users: {
        list: users,
        usernameSort: -1,
        areas: areas,
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