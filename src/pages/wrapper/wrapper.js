import React, { Component } from 'react';

import './styles.css';
import Backlog from '../backlog/backlog';
import Sprint from '../sprint/sprint';

export default class Wrapper extends Component {

    render() {
        return(
            <div className="wrapper">
                <Backlog />
                <Sprint />
            </div>
        )
    }

}