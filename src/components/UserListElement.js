import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

class UserListElement extends React.Component {
    constructor(props) {
        console.log('UserListElement.constructor');
        super(props);
        // bind <this> to the event methods
        this.modalDeleteShow = this.modalDeleteShow.bind(this);
    }

    render() {
        console.log('UserListElement.render');
        const user = this.props.user;
        return(
            <tr>
                <td>#{user.id}</td>
                <td>{user.username}</td>
                <td>{user.job}</td>
                <td>
                    <a href={'/user-edit/' + user.id}>
                        <Button bsSize="xsmall">
                            Edit <Glyphicon glyph="edit"/>
                        </Button>
                    </a>
                </td>
                <td>
                    <Button bsSize="xsmall" data-id={user.id} data-username={user.username} onClick={this.modalDeleteShow}>
                        Delete <Glyphicon glyph="remove-circle"/>
                    </Button>
                </td>
                <td>{user.access.join(', ')}</td>
            </tr>
        );
    }

    /**
     *      mapStateToProps() not required, presumably because props are passed in from UserList
     */

    // prompt to delete the user
    modalDeleteShow(event) {
        console.log('UserListElement.modalDeleteShow');
        const userId = Number(event.target.dataset.id);
        const username = event.target.dataset.username; 
        this.props.dispatch({
            type: 'users.modalDeleteShow',
            id: userId,
            username: username,
        });
    }
}

// make sure we have all the props
UserListElement.propTypes = {
    user: React.PropTypes.object.isRequired
}

// export the connected class
export default connect()(UserListElement); // https://youtu.be/wJG7znutkyw?list=PLJBrYU54JD2pTblB20OmV7GL6H5J-p2g8&t=274
