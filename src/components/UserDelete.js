import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

/**
 * user delete dialog box
 */
class UserDelete extends React.Component {
    render() {
        return(
            <Modal show={this.props.modalDelete.show}>
                <Modal.Header>
                    <Modal.Title>
                        Are you sure you want to delete <strong>{this.props.modalDelete.username}</strong>?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button>No</Button>
                    <Button bsStyle="primary">Yes</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    // set the data for the user delete modal
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