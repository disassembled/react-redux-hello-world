import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

/**
 * user delete dialog box
 */
class UserDelete extends React.Component {
    constructor(props) {
        super(props);
        // bind <this> to the event methods
        this.modalDeleteHide = this.modalDeleteHide.bind(this);
    }

    render() {
        return(
            <Modal show={this.props.modalDelete.show}>
                <Modal.Header>
                    <Modal.Title>
                        Are you sure you want to delete <strong>{this.props.modalDelete.username}</strong>?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={this.modalDeleteHide}>No</Button>
                    <Button bsStyle="primary">Yes</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    // close the delete user dialog
    modalDeleteHide(event) {
        this.props.dispatch({
            type: 'users.modalDeleteHide',
        });
    }
}

// set the data for the user delete modal
function mapStateToProps(state) {
    console.log('UserDelete.mapStateToProps');
    let modalDelete;
    if(state.users.modal && state.users.modal.listDelete) {
        modalDelete = state.users.modal.listDelete;
    }
    else {
        modalDelete = {
            show: false,
            id: 0,
            username: '',
        }
    }

    return {
        modalDelete: modalDelete,
    }
}

export default connect(mapStateToProps)(UserDelete);