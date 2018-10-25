import React from 'react';
import { Glyphicon, Table } from 'react-bootstrap';
import UserListElement from './UserListElement';
import UserDelete from './UserDelete';
import { connect } from 'react-redux';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.sortByUsername = this.sortByUsername.bind(this);
    }

    render() {
        console.log('UserList.render');
        return(
            <div>
                <Table bordered hover responsive striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username <Glyphicon glyph="glyphicon glyphicon-sort" onClick={this.sortByUsername} /></th>
                            <th>Job</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Access <Glyphicon glyph="glyphicon glyphicon-filter" /></th>
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

    sortByUsername() {
        console.log('sortByUsername');
        this.props.dispatch({
            type: 'users.sortByUsername',
        });
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
