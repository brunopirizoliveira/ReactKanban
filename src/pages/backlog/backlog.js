import React, { Component } from 'react';

import './styles.css';
import HeaderBacklog from './header-backlog/header-backlog';
import ListCardsBacklog from './list-cards-backlog/list-cards-backlog';

export default class Backlog extends Component {

    render() {
        return(
            <div className="backlog">
                <HeaderBacklog />
                <ListCardsBacklog />
            </div>
        )
    }

}