export default function users(state = {}, action) {
    let newState;
    switch(action.type) {
        case 'users.modalDeleteShow':
            newState = JSON.parse(JSON.stringify(state));
            newState.modal = newState.modal ? newState.Modal : {};
            newState.modal.listDelete = {
                show: true,
                id: action.id,
                username: action.username,
            }
            return newState;

        default:
            // no action passed so show default state
            return state;
    }
}
