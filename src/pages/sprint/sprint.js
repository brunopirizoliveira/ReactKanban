import React, { Component } from 'react';

import './styles.css';
import ListUsers from './list-users/list-users';

export default class Sprint extends Component {


    render() {
        return(
            <div className="sprint">
                <ListUsers />
            </div>
        )
    }

}