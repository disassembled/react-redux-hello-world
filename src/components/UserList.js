import React from 'react';
import { Table } from 'react-bootstrap';
import UserListElement from './UserListElement';
import UserDelete from './UserDelete';
import { connect } from 'react-redux';

class UserList extends React.Component {
    render() {
        console.log('UserList.render');
        return(
            <div>
                <Table bordered hover responsive striped>
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
                </Table>
                <UserDelete/>
            </div>
        );
    }
}

// export the connected class
function mapStateToProps(state) {
    console.log('UserList.mapStateToProps');
    return({
        users: state.users.list,
    });
}

export default connect(mapStateToProps)(UserList);
