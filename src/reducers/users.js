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

    static modalFilterShow(newState, action) {
        newState.modal = newState.modal ? newState.modal : {};
        newState.modal.modalFilter = {
            show: true,
        }
        return newState;
    }

    static applyFilters(newState, action) {
        let areasChecked = newState.areas.filter(a => a.checked);
        newState.list.forEach(user => {
            user.show = false;
            areasChecked.forEach(area => {
                if(user.access.includes(area.name)) {
                    user.show = true;
                }
            });
        });

        newState.modal.modalFilter = {
            show: false,
        }
        return newState;
    }

    static toggleArea(newState, action) {
        let area = newState.areas.find(a => a.name === action.areaName);
        area.checked = !area.checked;
        return newState;
    }
}
