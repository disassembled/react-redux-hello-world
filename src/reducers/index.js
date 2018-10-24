import { combineReducers } from 'redux';
import users from './users';

export const reducers = combineReducers({
    users: users,
});

export function reducerCall(state, action, reducerClass) {
    console.log(`reducerCall() with action.type === ${action.type}`);

    // get the action class method
    const [, method] = action.type.split('.');

    // get all class methods
    const methods = Object.getOwnPropertyNames(reducerClass).filter(name => {
        if('length' !== name && 'name' !== name && 'prototype' !== name) {
            return name;
        }
    });

    // check if the action method exists in the static class
    if(methods.find(m => m === method)) {
        const newState = cloneObject(state);
        return reducerClass[method](newState, action);
    }
    else {
        // there's no valid action so just return state
        return state;
    }
}

function cloneObject(object) {
    return JSON.parse(JSON.stringify(object));
}
