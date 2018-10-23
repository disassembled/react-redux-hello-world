import React from 'react';
import UserListElement from './UserListElement';

export default class UserList extends React.Component {
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Job</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((user, index) => {
                        return (
                            <UserListElement key={user.id} user={user}/>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

// make sure we have all the props
UserList.propTypes = {
    users: React.PropTypes.array.isRequired
}
