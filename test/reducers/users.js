import assert from 'assert';
import users from './../../src/reducers/users';

describe('Users reducer', () => {
    describe('delete', () => {
        it('should remove the specified user from the list', () => {
            const action = {
                id: 2,
                type: 'users.delete',
                username: 'Paul',
            };
            const state = {
                list: [
                    { id: 1, username: 'John' },
                    { id: 2, username: 'Paul' },
                    { id: 3, username: 'George' },
                ],
            };
            const expected = {
                list: [
                    { id: 1, username: 'John' },
                    { id: 3, username: 'George' },
                ],
            };

            const newState = users(state, action);
            assert.deepEqual(newState, expected);
        });
    });
});
