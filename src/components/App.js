import React from 'react';
import UserList from './UserList';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        const users = [];
        for(let i=1; i<11; i++) {
            users.push({
                id: i,
                username: 'John '+ i,
                job: 'Employee ' + i,
            });
        }

        // save users in the state
        this.state = {
            users: users,
        };
    }

    render() {

        return (
            <UserList users={this.state.users}/>
        );
    }
}