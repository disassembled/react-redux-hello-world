import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './stylesheets/main.scss';
import App from './components/App';
import { reducers } from './reducers/index';

// build users list
let users = [];
for(let i=1; i<11; i++) {
    users.push({
        id: i,
        username: 'John '+ i,
        job: 'Employee ' + i,
    });
}

const initialState = {
    users: users,
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