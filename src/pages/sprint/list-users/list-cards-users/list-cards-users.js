import React, { Component } from 'react';

import './styles.css';

export default class ListCardsUsers extends Component {

    render() {
        return(
            <div>{this.props.user}</div>
        );
    }

}