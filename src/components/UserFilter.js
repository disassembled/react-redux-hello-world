import React from 'react';
import { Modal, Button, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class UserFilter extends React.Component {
    constructor(props) {
        super(props);
        // bind <this> to the event methods
        this.toggleArea = this.toggleArea.bind(this);
        this.applyFilters = this.applyFilters.bind(this);
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
                    {this.props.areas.map((area, index) => {
                        return (
                            <div className="area-filter" key={index}>
                                <input type="checkbox" value={area.name} defaultChecked={area.checked} onChange={this.toggleArea} />
                                {area.name}
                            </div>
                        );
                    })}
                    <Button onClick={this.applyFilters}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    toggleArea(event) {
        console.log(`toggleArea: ${event.target.value}`);
        this.props.dispatch({
            type: 'users.toggleArea',
            areaName: event.target.value,
        });
    }

    applyFilters(event) {
        console.log('UserFilter.applyFilters');
        this.props.dispatch({
            type: 'users.applyFilters',
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

    return({
        modalFilter: modalFilter,
        areas: state.users.areas,
    });
}

export default connect(mapStateToProps)(UserFilter);
