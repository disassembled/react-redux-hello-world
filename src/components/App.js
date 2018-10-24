import React from 'react';
import UserList from './UserList';

export default class App extends React.Component {

    render() {
        console.log('App.render');
        return (
            <div className="container">
                <UserList/>
            </div>
        );
    }
}