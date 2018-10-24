import { reducerCall } from './index';

export default function users(state = {}, action) {
    return reducerCall(state, action, reducerClass);
}

class reducerClass {
    static modalDeleteShow(newState, action) {
        newState.modal = newState.modal ? newState.modal : {};
        newState.modal.listDelete = {
            show: true,
            id: action.id,
            username: action.username,
        }
        return newState;
    }

    static modalDeleteHide(newState, action) {
        newState.modal.listDelete = {
            show: false,
            id: 0,
            username: '',
        }
        return newState;
    }

    static delete(newState, action) {
        newState.list = newState.list.filter(user => user.id !== action.id);
        return newState;
    }

    static sortByUsername(newState, action) {
        newState.usernameSort = -newState.usernameSort;
        newState.list.sort((a,b) => (a.username > b.username) ? newState.usernameSort : ((b.username > a.username) ? -newState.usernameSort : 0));
        return newState;
    }
}
