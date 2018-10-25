import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class UserFilter extends React.Component {
    constructor(props) {
        super(props);
        // bind <this> to the event methods
        this.modalFilterHide = this.modalFilterHide.bind(this);
    }

    render() {
        return(
            <Modal show={this.props.modalFilter.show}>
                <Modal.Header>
                    <Modal.Title>
                        Filter
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={this.modalFilterHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    modalFilterHide(event) {
        console.log('UserFilter.modalFilterHide');
        this.props.dispatch({
            type: 'users.modalFilterHide',
        });
    }
}

function mapStateToProps(state) {
    console.log('UserFilter.mapStateToProps');
    let modalFilter;
    if(state.users.modal && state.users.modal.modalFilter) {
        modalFilter = state.users.modal.modalFilter;
    }
    else {
        modalFilter = {
            show: false,
        }
    }

    return {
        modalFilter: modalFilter,
    }
}

export default connect(mapStateToProps)(UserFilter);
