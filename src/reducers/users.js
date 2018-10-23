export default function users(state = {}, action) {
    let newState;
    switch(action.type) {
        case 'users.modalDeleteShow':
            newState = JSON.parse(JSON.stringify(state));
            newState.modal = newState.modal ? newState.modal : {};
            newState.modal.listDelete = {
                show: true,
                id: action.id,
                username: action.username,
            }
            console.log('Returning state from reducer with user to delete: ' + action.username);
            return newState;

        case 'users.modalDeleteHide':
            newState = JSON.parse(JSON.stringify(state));
            newState.modal.listDelete = {
                show: false,
                id: 0,
                username: '',
            }
            return newState;

        default:
            // no action passed so show default state
            return state;
    }
}
